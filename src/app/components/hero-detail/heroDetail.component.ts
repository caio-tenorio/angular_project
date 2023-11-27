import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFormModule } from '../../ngform.module';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, NgFormModule],
  templateUrl: './heroDetail.component.html',
  styleUrl: './heroDetail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
