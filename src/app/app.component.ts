import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroesComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
