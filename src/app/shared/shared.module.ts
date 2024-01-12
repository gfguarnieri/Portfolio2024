import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevIconItemComponent } from './dev-icon-item/dev-icon-item.component';
import { ItemTrajetoriaComponent } from './item-trajetoria/item-trajetoria.component';



@NgModule({
  declarations: [ItemTrajetoriaComponent, DevIconItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemTrajetoriaComponent
  ]
})
export class SharedModule { }
