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

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.content$;
  }

  ngOnInit(): void {
    // Verificar se EmailJS está configurado
    if (!environment.emailjs.publicKey || environment.emailjs.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
      console.warn('⚠️ EmailJS não configurado. Configure as chaves em environment.ts');
    } else {
      // Inicializar EmailJS apenas se configurado
      emailjs.init(environment.emailjs.publicKey);
      console.log('✅ EmailJS inicializado com sucesso');
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

    // Validação básica
    if (!contactInfo.nome || !contactInfo.email || !contactInfo.mensagem) {
      this.showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    // Verificar se EmailJS está configurado
    if (!environment.emailjs.publicKey || environment.emailjs.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
      this.showMessage('⚠️ Sistema de email em configuração. Entre em contato pelo WhatsApp por favor.', 'warning');
      return;
    }

    console.log('🚀 Iniciando envio de email...');
    
    // Preparar dados para o template EmailJS
    const templateParams = {
      to_email: environment.contactEmail,
      from_name: contactInfo.nome,
      from_email: contactInfo.email,
      phone: contactInfo.telefone || 'Não informado',
      message: contactInfo.mensagem,
      reply_to: contactInfo.email
    };

    console.log('📋 Parâmetros preparados para envio');

    // Iniciar estado de submissão
    this.isSubmitting = true;
    this.submitMessage = 'Enviando mensagem...';

    // Enviar email usando EmailJS
    console.log('📤 Tentando enviar via EmailJS...');
    emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams
    ).then((response: EmailJSResponseStatus) => {
      console.log('✅ Email enviado com sucesso!');
      this.showMessage('✅ Mensagem enviada com sucesso! Safira entrará em contato em breve.', 'success');
      form.reset();
    }).catch((error) => {
      console.error('❌ Erro ao enviar email:', error);
      
      // Mensagem mais específica baseada no tipo de erro
      if (error.status === 400) {
        this.showMessage('❌ Erro de configuração. Entre em contato pelo WhatsApp.', 'error');
      } else if (error.status === 401) {
        this.showMessage('❌ Credenciais inválidas. Entre em contato pelo WhatsApp.', 'error');
      } else {
        this.showMessage('❌ Erro temporário. Tente novamente ou entre em contato pelo WhatsApp.', 'error');
      }
    }).finally(() => {
      // Finalizar estado de submissão
      this.isSubmitting = false;
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
      console.log('🔄 Processo finalizado');
    });
  }

  private showMessage(message: string, type: 'success' | 'error' | 'warning'): void {
    this.submitMessage = message;
    
    // Auto-limpar mensagem após 5 segundos
    setTimeout(() => {
      this.submitMessage = '';
    }, 5000);
    
    // Também mostrar alert para compatibilidade
    alert(message);
  }
}
