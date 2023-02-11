import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideButtonComponent } from './components/slide-button/slide-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideButtonComponent,
    FooterComponent,
    LandingComponent,
    ImprintComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
