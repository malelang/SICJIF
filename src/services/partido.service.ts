import { Facultad } from './facultad.service';

export class Partido{
    _id:string;
    fecha:string;
    hora:string;
    equipo1:Facultad;
    equipo2:Facultad;
    arbitro:string;
    lugar:string;
    golesequipo1:number;
    golesequipo2:number;
}