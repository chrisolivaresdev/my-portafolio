import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';




@NgModule({
  declarations: [HomeComponent, CertificatesComponent, PortfolioComponent, ContactoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomeComponent, CertificatesComponent, PortfolioComponent, ContactoComponent]
})
export class PortafolioModule { }
