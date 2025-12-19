import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService, SiteContent } from '../../services/content.service';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  content$: Observable<SiteContent>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.content$;
  }

  ngOnInit(): void {}
}
