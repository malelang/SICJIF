import { Injectable } from "@angular/core";
import { Facultad } from '../facultad.service';

@Injectable()

export class FacultadDataProvider{
    data:Facultad[]=
    [
        {_id:"1",nombre:"Ingeniería Electronica",puntos:7,entrenador:"Jose Luis Guaca"},
        {_id:"2",nombre:"Derecho",puntos:5,entrenador:"Mónica Mabel García"},
        {_id:"3",nombre:"Ciencias de la Salud",puntos:6,entrenador:"Francisco Jose Bohorquez"},
        {_id:"4",nombre:"Ciencias Contables",puntos:3,entrenador:"Edwin Lopez"}
    ]
}