import { Routes } from '@angular/router'
import { ConcertsPage } from './pages/concerts/concerts.page'
import { ArtistesPage } from './pages/artistes/artistes.page'
import { TicketsPage } from './pages/tickets/tickets.page'
import { NotFoundPage } from './pages/not-found/not-found.page'
import { HomePage } from './pages/home/home.page'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage, title: 'Accueil' },
  { path: 'concerts', component: ConcertsPage, title: 'Gestion des concerts' },
  { path: 'tickets', component: TicketsPage, title: 'Gestion des tickets' },
  { path: 'artistes', component: ArtistesPage, title: 'Gestion des artistes' },
  { path: '**', component: NotFoundPage },
]
