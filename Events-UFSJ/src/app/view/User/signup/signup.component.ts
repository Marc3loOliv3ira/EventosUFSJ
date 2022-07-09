import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usuario : any;
  constructor(private signupService : SignupService,private router: Router) { }

  ngOnInit(): void {
    this.usuario = {};
  }
  adicionarUsuario(frm: FormGroup){
    this.signupService.addUsuario(this.usuario).subscribe(resposta => {
      this.router.navigate(['/events']);
    });
  }
}
