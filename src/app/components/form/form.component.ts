import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INew } from '../../iterfaces/inew.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  newsServices = inject (NewsService)


  getDataNew(formNews: any) :void {
    let newNoticia: INew = formNews.value;
    if(newNoticia.titulo !== null && newNoticia.date !== null && newNoticia.body !== null && newNoticia.image !== null){
      let response = this.newsServices.insert(newNoticia)
      alert(response.msg)
      formNews.reset()
    }else{
      alert ("Todos los campos son obligatorios");
    }
  }
}
