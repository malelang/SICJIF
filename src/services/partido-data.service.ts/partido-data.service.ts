import { Injectable } from "@angular/core";
import { Partido } from '../partido.service';
import { Facultad } from '../facultad.service';
import {FacultadDataProvider} from '../facultad-data/facultad-data.service'

@Injectable()

export class PartidoDataProvider{
    datafacultades:Facultad[]=[
        {_id:"1",nombre:"Ingeniería Electronica",puntos:7,entrenador:"Jose Luis Guaca"},
        {_id:"2",nombre:"Derecho",puntos:5,entrenador:"Mónica Mabel García"},
        {_id:"3",nombre:"Ciencias de la Salud",puntos:6,entrenador:"Francisco Jose Bohorquez"},
        {_id:"4",nombre:"Ciencias Contables",puntos:3,entrenador:"Edwin Lopez"}
    ]
    date2:Date=new Date(2018,5,5,17,23,0)
    anio=""+this.date2.getFullYear();
    mes=""+this.date2.getMonth();
    dia=""+this.date2.getDay();
    fecha=this.dia+" / "+this.mes+" / "+this.anio
    horas=""+this.date2.getHours();
    minutos=""+this.date2.getMinutes();
    hora=this.horas+" : "+this.minutos;
    //console.log(date2)
    
    data:Partido[]=
    [
        {_id:"1",fecha:this.fecha,hora:this.hora,equipo1:this.datafacultades[1],equipo2:this.datafacultades[2],arbitro:"Endris Hurtado",lugar:"CDU Tulcan",golesequipo1:1,golesequipo2:4}
    ]
}