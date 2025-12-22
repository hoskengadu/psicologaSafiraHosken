import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService, SiteContent } from '../../services/content.service';

@Component({
  selector: 'app-abordagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abordagem.component.html',
  styleUrls: ['./abordagem.component.scss']
})
export class AbordagemComponent {
  content$: Observable<SiteContent>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.content$;
  }
}
