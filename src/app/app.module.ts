import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './component/principal/principal.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoCarouselComponent } from './component/video-carousel/video-carousel.component';
import { InstagramFeedComponent } from './component/instagram-feed/instagram-feed.component';
import { PoliticasPrivacidadComponent } from './component/politica/politicas-privacidad/politicas-privacidad.component';
import { PoliticaCookiesComponent } from './component/politica-cookies/politica-cookies.component';
import { LimpiezaOficinaComponent } from './component/limpieza-oficina/limpieza-oficina.component';
import { LimpiezaLocalComponent } from './component/limpieza-local/limpieza-local.component';
import { LimpiezaCasaComponent } from './component/limpieza-casa/limpieza-casa.component';
import { ImageModalComponent } from './component/image-modal/image-modal.component';
import { WhatsappFloatComponent } from './shared/whatsapp-float.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContactoComponent,
    VideoCarouselComponent,
    InstagramFeedComponent,
    PoliticasPrivacidadComponent,
    PoliticaCookiesComponent,
    LimpiezaOficinaComponent,
    LimpiezaLocalComponent,
    LimpiezaCasaComponent,
    ImageModalComponent
    , WhatsappFloatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
