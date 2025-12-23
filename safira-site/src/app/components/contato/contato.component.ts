import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContentService, SiteContent } from '../../services/content.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  content$: Observable<SiteContent>;
  isSubmitting = false;
  submitMessage = '';
  showModal = false;
  modalTitle = '';
  modalMessage = '';
  modalType: 'success' | 'error' | 'warning' = 'success';
  modalIcon = '';

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.content$;
  }

  ngOnInit(): void {
    console.log('EmailJS Config:', environment.emailjs);
    if (environment.emailjs.publicKey && environment.emailjs.publicKey !== 'YOUR_PUBLIC_KEY_HERE') {
      emailjs.init(environment.emailjs.publicKey);
      console.log('EmailJS initialized with key:', environment.emailjs.publicKey.substring(0, 5) + '...');
    }
  }


  onSubmit(event: Event): void {
    event.preventDefault();
    
    if (this.isSubmitting) return;
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const contactInfo = {
      nome: formData.get('nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      mensagem: formData.get('mensagem') as string
    };

    if (!contactInfo.nome || !contactInfo.email || !contactInfo.mensagem) {
      this.showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    if (!environment.emailjs.publicKey || !environment.emailjs.serviceId || !environment.emailjs.templateId) {
      this.showModalMessage('Sistema Temporariamente Indisponível', 'Sistema de email em configuração. Entre em contato pelo WhatsApp.', 'warning');
      return;
    }

    const templateParams = {
      to_email: environment.contactEmail,
      from_name: contactInfo.nome,
      from_email: contactInfo.email,
      phone: contactInfo.telefone || 'Não informado',
      message: contactInfo.mensagem,
      reply_to: contactInfo.email
    };

    this.isSubmitting = true;
    this.submitMessage = 'Enviando mensagem...';

    console.log('Sending email with params:', templateParams);
    console.log('Service ID:', environment.emailjs.serviceId);
    console.log('Template ID:', environment.emailjs.templateId);

    emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, templateParams)
      .then((result) => {
        console.log('Email sent successfully:', result);
        this.showModalMessage('Mensagem Enviada!', 'Sua mensagem foi enviada com sucesso! Safira entrará em contato em breve.', 'success');
        form.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        const message = error.status === 400 ? 'Erro de configuração do sistema.' : 
                       error.status === 401 ? 'Credenciais inválidas.' : 
                       'Erro temporário. Tente novamente.';
        this.showModalMessage('Erro no Envio', `${message} Entre em contato pelo WhatsApp.`, 'error');
      })
      .finally(() => {
        this.isSubmitting = false;
        setTimeout(() => this.submitMessage = '', 2000);
      });
  }

  private showMessage(message: string, type: 'success' | 'error' | 'warning'): void {
    this.submitMessage = message;
    setTimeout(() => this.submitMessage = '', 5000);
  }

  private showModalMessage(title: string, message: string, type: 'success' | 'error' | 'warning'): void {
    console.log('Opening modal:', { title, message, type });
    this.modalTitle = title;
    this.modalMessage = message;
    this.modalType = type;
    this.modalIcon = type === 'success' ? '✅' : type === 'error' ? '❌' : '⚠️';
    this.showModal = true;
    console.log('Modal state:', { showModal: this.showModal, modalTitle: this.modalTitle });
  }

  closeModal(): void {
    this.showModal = false;
    this.modalTitle = '';
    this.modalMessage = '';
  }

  onModalBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
