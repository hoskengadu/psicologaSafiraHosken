import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { AbordagemComponent } from './components/abordagem/abordagem.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'abordagem', component: AbordagemComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '/home' }
];
