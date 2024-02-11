import { SpotifyPlaylistsService } from './../../services/spotifyPlaylists.service';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { NgFormModule } from '../../ngform.module';
import { HeroDetailComponent } from '../hero-detail/heroDetail.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthorizationCodeUriResponse } from '../../interfaces/authorizationCodeUriResponse';
import { SpotifyAuthService } from '../../services/spotifyAuth.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, NgFormModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(private heroService: HeroService,
    private toastr: ToastrService,
    private spotifyAuthService: SpotifyAuthService,
    private router: Router) {}
  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.spotifyAuthService.getAuthorizationURI().subscribe((response: AuthorizationCodeUriResponse) => {
      console.log(response.uri)
      if(response != null && response.uri !== null) {
        window.location.href = response.uri
      }
    })

    if(hero === this.selectedHero) {
      this.selectedHero = undefined;
      return;
    }
    this.selectedHero = hero;
    this.toastr.success("Hero " + this.selectedHero.name + " was selected!");
  }
}
