import { BodyComponent } from './body/body.component';
import { quienesSomosComponent } from './quienesSomos/quienesSomos.component';
import { ServiciosComponent } from './servicios/Servicios.Component';
import { GaleriaComponent } from './galeria/galeria.component';

import { Routes } from '@angular/router';


export const routes: Routes = [

  {path: '', redirectTo:'/body', pathMatch:'full'},
  {path: 'quienesSomos', component: quienesSomosComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'body', component:BodyComponent},
  {path: 'galeria', component : GaleriaComponent}
]

