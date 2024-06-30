import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListanoticiasComponent } from './components/listanoticias/listanoticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, ListanoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad5David';
}
