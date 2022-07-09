import { Injectable } from "@angular/core";
import { Usuario } from "../User/login/login.component";
@Injectable({
    providedIn: 'root'
  })
export class Globals{
    loginData = new LoginData();
}
class LoginData{
    token : string = null;
    usuario: Usuario = null;
}