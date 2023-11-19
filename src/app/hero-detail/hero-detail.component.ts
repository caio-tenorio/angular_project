import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFormModule } from '../ngform.module';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, NgFormModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
