import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-trajetoria',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './trajetoria.component.html',
  styleUrl: './trajetoria.component.scss'
})
export class TrajetoriaComponent {

  public dataInicioExemplo:Date = new Date(2023, 7, 10);
}
