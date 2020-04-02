import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Linked components
import { TecajeviComponent } from './tecajevi/tecajevi.component'
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tecaj', component: TecajeviComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
