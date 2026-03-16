import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { PoliticasPrivacidadComponent } from './component/politica/politicas-privacidad/politicas-privacidad.component';
import { PoliticaCookiesComponent } from './component/politica-cookies/politica-cookies.component';
import { LimpiezaOficinaComponent } from './component/limpieza-oficina/limpieza-oficina.component';
import { LimpiezaLocalComponent } from './component/limpieza-local/limpieza-local.component';
import { LimpiezaCasaComponent } from './component/limpieza-casa/limpieza-casa.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, // Redirección a la ruta principal
  { path: 'principal', component: PrincipalComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'limpieza-oficina', component: LimpiezaOficinaComponent },
  { path: 'limpieza-local', component: LimpiezaLocalComponent },
  { path: 'limpieza-casa', component: LimpiezaCasaComponent },

  { path: 'politica-privacidad', component: PoliticasPrivacidadComponent },
  { path: 'politica-cookies', component: PoliticaCookiesComponent },
  { path: '**', redirectTo: '/principal' }                  // Ruta para manejar páginas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
