import { Component } from '@angular/core';
import { INew } from '../../iterfaces/inew.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  newNoticia:INew = {titulo:"", image:"", body:"", date:""};

  arrNoticias:INew[] = [
    {
      titulo: 'Dos perros se enamoran locamente y comparten pasta juntos',
      image: 'https://media.revistavanityfair.es/photos/60e85001f65f37760f5bf9a6/master/w_1600,c_limit/19874.jpg',
      body: 'La película está basada en la novela homónima de Ward Greene y fue la primera película de animación estrenada en Cinemascope. Se produjeron y estrenaron dos versiones de la película simultáneamente, la versión Cinemascope y otra versión de tamaño académico 1.33:1 para los cines no preparados para la nueva tecnología. La segunda versión, en la que se rediseñaron planos y encuadres para adaptarlos a la pantalla estrecha, no tuvo mucha distribución más allá del estreno, y las versiones posteriores 4:3 publicadas en video, DVD o Blu-Ray son versiones Pan and scan de la versión Cinemascope.',
      date: '2024-07-09'
    },
    {
      titulo: 'Los amigos de los perros montan una fiesta',
      image: 'https://imagenes.20minutos.es/files/image_990_auto/uploads/imagenes/2020/06/22/la-dama-y-el-vagabundo-1955.jpeg',
      body: 'La película está basada en la novela homónima de Ward Greene y fue la primera película de animación estrenada en Cinemascope. Se produjeron y estrenaron dos versiones de la película simultáneamente, la versión Cinemascope y otra versión de tamaño académico 1.33:1 para los cines no preparados para la nueva tecnología. La segunda versión, en la que se rediseñaron planos y encuadres para adaptarlos a la pantalla estrecha, no tuvo mucha distribución más allá del estreno, y las versiones posteriores 4:3 publicadas en video, DVD o Blu-Ray son versiones Pan and scan de la versión Cinemascope.',
      date: '2024-07-15'
    }
  ]

  getNoticias():string{
    let html = "";
    for (let noticia of this.arrNoticias) {
      html += `<article>
        <figure>
            <img src="${noticia.image}" alt="">
        </figure>
        <h3>${noticia.titulo}</h3>
        <p>${noticia.body}</p>
        <small>${noticia.date}</small>
      </article>`;
    }
    return html;
  }

  getDataNew() {
    if(this.newNoticia.titulo != "" && this.newNoticia.image != "" && this.newNoticia.body != "" && this.newNoticia.date != ""){
      this.arrNoticias.push(this.newNoticia);
    }else{
      alert("Todos los campos son obligatorios");
    }
  }
}
