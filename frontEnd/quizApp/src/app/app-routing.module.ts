import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Linked components
import { TecajeviComponent } from './tecajevi/tecajevi.component'

const routes: Routes = [
  { path: 'tecaj', component: TecajeviComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
