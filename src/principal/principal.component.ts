import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  
    estadolog=true;
    correologin:string="";
    correoregister:string="";
    passwordlogin:string="";
    passwordregister:string="";
    nombre:string="";
    facultad:string="";
    rol:string="";
    
    changeLog(){
        
        if(this.estadolog){
            this.estadolog=false;
        }else{
            this.estadolog=true;
        }
        console.log(this.estadolog)
    }

    login(){
        console.log("This is the information for login")
        console.log(this.correologin+";"+ this.passwordlogin);
    }

    register(){
        console.log("This is the information for register")
        console.log(this.correoregister+";"+ this.passwordregister);
        console.log(this.nombre+","+this.facultad);
        console.log(this.rol);
    }
}