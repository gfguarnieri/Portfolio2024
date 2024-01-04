import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { DevIconItemComponent } from './dev-icon-item/dev-icon-item.component';



@NgModule({
  declarations: [ItemComponent, DevIconItemComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
