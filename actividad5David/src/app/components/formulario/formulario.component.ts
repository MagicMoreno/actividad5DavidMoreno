import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iformulario } from '../../interfaces/iformulario.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  arrNoticias: Iformulario[] = [
    {title: 'España - Finlandia', imagenUrl: 'https://img2.rtve.es/i/?w=1600&i=01720174227175.jpg', cuerpo: 'España está a dos pasos de disputar sus octavos Juegos Olímpicos consecutivos desde 1996, los de París 2024.', fecha: new Date()},

    {title: 'El Team USA', imagenUrl: 'https://cdn.gigantes.com/wp-content/uploads/2021/08/image-2-e1694445282718.jpg', cuerpo: 'El Team USA ya tiene decididos los 12 nombres de la convocatoria para los Juegos Olímpicos de París 2024. El equipo dirigido por Steve Kerr.', fecha: new Date()}
  ];

  newnotice: Iformulario = {
    title: '',
    imagenUrl: '',
    cuerpo: '',
    fecha: new Date()
  };
  
  addNotice() {
        const isValidNotice = (noticia: Iformulario) => {
        return noticia.title !== "" &&
               noticia.imagenUrl !== "" &&
               noticia.cuerpo !== "";
    };
    
    if (isValidNotice(this.newnotice)) {
        this.arrNoticias.push({ ...this.newnotice });

        const now = new Date();
        this.newnotice = {
            title: '',
            imagenUrl: '',
            cuerpo: '',
            fecha: new Date()
        };
    }else {
      alert("Por favor, complete todos los campos.");
  }
}

  cargarNoticia() {
    let html: string = '';
    this.arrNoticias.forEach((noticia: Iformulario) => {
        html += `<ul>
                    <li>
                        <h3>${noticia.title}</h3>
                        <img src="${noticia.imagenUrl}">
                        <p>${noticia.cuerpo}</p>
                        <p>${noticia.fecha}</p>
                    </li>
                </ul>`;
    });
    return html;
}
}
