import { Component } from '@angular/core';
import { Facultad } from 'src/services/facultad.service';
import { Partido } from 'src/services/partido.service';
import { FacultadDataProvider } from 'src/services/facultad-data/facultad-data.service';
import { PartidoDataProvider } from 'src/services/partido-data.service.ts/partido-data.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
    facultades:Facultad[];
    partidos:Partido[];
    constructor(public service:FacultadDataProvider,public service2:PartidoDataProvider){
        this.facultades=service.data;
        this.facultades.sort(function (a, b){
            return (b.puntos - a.puntos)
        })
        //console.log(this.facultades)
        this.partidos=service2.data;
        console.log(this.partidos);
        
    }
}