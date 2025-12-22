import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService, SiteContent } from '../../services/content.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  content$: Observable<SiteContent>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.content$;
  }
}
