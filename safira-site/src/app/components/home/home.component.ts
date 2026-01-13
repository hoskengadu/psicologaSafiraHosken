import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService, SiteContent } from '../../services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  content$: Observable<SiteContent>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.content$;
  }
}
