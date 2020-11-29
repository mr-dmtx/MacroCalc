import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicasAlimentosPage } from './dicas-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: DicasAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicasAlimentosPageRoutingModule {}
