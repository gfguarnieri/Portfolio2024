import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-trajetoria',
  templateUrl: './item-trajetoria.component.html',
  styleUrl: './item-trajetoria.component.scss'
})
export class ItemTrajetoriaComponent {

  @Input() active? : boolean | undefined = false;
  @Input({required: true}) titulo : string = "";
  @Input({required: true}) descricao : string = "";
  @Input({required: true}) dataInicio? : Date;
  @Input({required: true}) dataFim : Date | undefined;

}
