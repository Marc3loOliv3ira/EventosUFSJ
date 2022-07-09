import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from 'app/view/globals/globals';
import { LoginService } from './login.service';
export class LoginResponse{
  token:string;
  usuario:Usuario;
  success: boolean;
}
export class Usuario{
  nome : string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  l_usuario: any;
  constructor(private  loginService : LoginService, private router:Router, private globals:Globals) { }
  
  ngOnInit(): void {
    this.l_usuario = {};
  }
 auth(frm : FormGroup){
  this.loginService.auth(this.l_usuario).subscribe(response=>{
    if(response.success == true)
    this.globals.loginData.token = response.token;
    this.globals.loginData.usuario = response.usuario;
    this.router.navigate(['/events']);
  })
 }

}
