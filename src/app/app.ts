import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = inject(Title).getTitle()

  protected readonly menu = [
    { label: '🏠', path: '/' },
    { label: 'Concerts', path: '/concerts' },
    { label: 'Tickets', path: '/tickets' },
    { label: 'Artistes', path: '/artistes' },
  ]
}
