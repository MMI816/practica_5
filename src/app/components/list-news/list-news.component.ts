import { Component, inject } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { INew } from '../../iterfaces/inew.interface';
import { NewCardComponent } from '../new-card/new-card.component';

@Component({
  selector: 'app-list-news',
  standalone: true,
  imports: [NewCardComponent],
  templateUrl: './list-news.component.html',
  styleUrl: './list-news.component.css'
})
export class ListNewsComponent {
  arrNoticias:INew[] = [];
  newServices =inject(NewsService);

  ngOnInit(): void {
    this.arrNoticias = this.newServices.getAll();
}
}
