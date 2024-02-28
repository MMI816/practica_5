import { Component, Input } from '@angular/core';
import { INew } from '../../iterfaces/inew.interface';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css'
})
export class NewCardComponent {
  @Input() miNoticia!:INew;
}
