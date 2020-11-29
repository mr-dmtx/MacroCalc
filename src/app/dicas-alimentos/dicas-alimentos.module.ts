import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicasAlimentosPageRoutingModule } from './dicas-alimentos-routing.module';

import { DicasAlimentosPage } from './dicas-alimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicasAlimentosPageRoutingModule
  ],
  declarations: [DicasAlimentosPage]
})
export class DicasAlimentosPageModule {}
