import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Globals } from 'app/view/globals/globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate,CanActivateChild {
  
  constructor(private router : Router, private globals : Globals
    ){
    
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      if(this.globals.loginData.token == null){
        this.router.navigate(['/user/auth']);
        return false;
      }
      return true
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      return this.canActivate(route,state);
  }
}
