import { Facultad } from './facultad.service';

export class Usuario{
    _id:string;
    nombre:string;
    correo: string;
    contraseña: string;
    rol: string;
}

export class Deportista extends Usuario{
    facultad: string;
}

export class Administrador extends Usuario{

}