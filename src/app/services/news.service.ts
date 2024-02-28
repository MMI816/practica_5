import { Injectable } from '@angular/core';
import { INew } from '../iterfaces/inew.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private arrNoticias:INew[] = [
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
  
  
  getAll(): INew[]{
    return this.arrNoticias;
  }

  insert(minoticia:INew): any{
    //comprobamos si la noticia existe en mi array
    let posicion = this.arrNoticias.findIndex(noticia => noticia.titulo === minoticia.titulo && noticia.date === minoticia.date)

    if(posicion !== -1){
      this.arrNoticias.push(minoticia);
      return{status:true, msg:'Noticia insertada correctamente'}
    }else{
      return{status:false, msg:'La noticia ya existe'}  
    }
  }
}
