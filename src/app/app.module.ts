import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from "swiper/angular";

import { AppComponent } from './app.component';

import { PortafolioModule } from './Portafolio/portafolio.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    SharedModule,
    PortafolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
