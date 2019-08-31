import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//PAGINAS
import { ResultadosComponent } from 'src/resultados/resultados.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from 'src/principal/principal.component';
import { HomeTrainerComponent } from 'src/hometrainer/hometrainer.component';

//PROVIDERS
import { FacultadDataProvider } from 'src/services/facultad-data/facultad-data.service';
import { PartidoDataProvider } from 'src/services/partido-data.service.ts/partido-data.service';



const appRoutes:Routes=[
  {path:'',component:PrincipalComponent},
  {path:'#',component:PrincipalComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'resultados',component:ResultadosComponent},
  {path:'hometrainer',component:HomeTrainerComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ResultadosComponent,
    HomeTrainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  
  ],
  providers: [
    FacultadDataProvider,
    PartidoDataProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
