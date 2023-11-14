import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Hero } from '../hero';
import { NgFormModule } from '../ngform.module';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, NgFormModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    if(hero === this.selectedHero) {
      this.selectedHero = undefined;
      return;
    }
    this.selectedHero = hero;
  }
}
