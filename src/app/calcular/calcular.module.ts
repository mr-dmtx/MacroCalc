import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
 import { FormsModule }   from '@angular/forms';

import { CalcularPageRoutingModule } from './calcular-routing.module';

import { CalcularPage } from './calcular.page';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CalcularPageRoutingModule,
    FormsModule
  ],
  declarations: [CalcularPage]
})
export class CalcularPageModule {}
