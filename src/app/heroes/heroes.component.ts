import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgFormModule } from '../ngform.module';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, NgFormModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private toastr: ToastrService) {}
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    if(hero === this.selectedHero) {
      this.selectedHero = undefined;
      return;
    }
    this.selectedHero = hero;
    this.toastr.success("Hero " + this.selectedHero.name + " was selected!");
  }
}
