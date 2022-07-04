import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './Portafolio/pages/home/home.component';
import { CertificatesComponent } from './Portafolio/pages/certificates/certificates.component';
import { PortfolioComponent } from './Portafolio/pages/portfolio/portfolio.component';

import { ContactoComponent } from './Portafolio/pages/contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'Certificates',
    component: CertificatesComponent
  },
  {
    path:'Portfolio',
    component: PortfolioComponent
  },
  {
    path:'Contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
