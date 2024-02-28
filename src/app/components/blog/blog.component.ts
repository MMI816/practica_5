import { Component } from '@angular/core';
import { INew } from '../../iterfaces/inew.interface';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { ListNewsComponent } from '../list-news/list-news.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormComponent, ListNewsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  /*newNoticia:INew = {titulo:"", image:"", body:"", date:""};*/

  /*getDataNew() {
    if(this.newNoticia.titulo != "" && this.newNoticia.image != "" && this.newNoticia.body != "" && this.newNoticia.date != ""){
      this.arrNoticias.push(this.newNoticia);
    }else{
      alert("Todos los campos son obligatorios");
    }
  }
*/
}
