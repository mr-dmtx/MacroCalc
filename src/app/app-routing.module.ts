import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calcular',
    loadChildren: () => import('./calcular/calcular.module').then( m => m.CalcularPageModule)
  },
  {
    path: 'dicas-alimentos',
    loadChildren: () => import('./dicas-alimentos/dicas-alimentos.module').then( m => m.DicasAlimentosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
