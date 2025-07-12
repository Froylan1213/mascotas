import { Component, Input } from '@angular/core';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pet:Pet | null = null;
  

}
