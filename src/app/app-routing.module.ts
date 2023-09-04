import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './Portafolio/pages/home/home.component';
import { CertificatesComponent } from './Portafolio/pages/certificates/certificates.component';
import { PortfolioComponent } from './Portafolio/pages/portfolio/portfolio.component';

import { ContactoComponent } from './Portafolio/pages/contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    loadComponent: ()=> import('./Portafolio/pages/home/home.component').then( C => C.HomeComponent ),
    pathMatch: 'full'
  },
  {
    path:'Certificates',
    loadComponent: ()=> import('./Portafolio/pages/certificates/certificates.component').then( C => C.CertificatesComponent ),

  },
  {
    path:'Portfolio',
    loadComponent: ()=> import('./Portafolio/pages/portfolio/portfolio.component').then( C => C.PortfolioComponent ),

  },
  {
    path:'Contact',
    loadComponent: ()=> import('./Portafolio/pages/contacto/contacto.component').then( C => C.ContactoComponent ),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
