import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { NgFormModule } from '../ngform.module';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, NgFormModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
