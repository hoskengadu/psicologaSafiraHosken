import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbordagemComponent } from './abordagem.component';

describe('AbordagemComponent', () => {
  let component: AbordagemComponent;
  let fixture: ComponentFixture<AbordagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbordagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbordagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
