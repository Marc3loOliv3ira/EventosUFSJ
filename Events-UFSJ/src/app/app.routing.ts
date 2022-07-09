import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './view/home/home.component';
import { EventsComponent } from './view/events/events.component';
import { TesteComponent } from './view/teste/teste.component';
import { LoginComponent } from './view/User/login/login.component';
import { SignupComponent } from './view/User/signup/signup.component';
import { EventsCreateComponent } from './view/events-create/events-create.component';
import { PerfilComponent } from './view/User/perfil/perfil.component';
import { EventsEditComponent } from './view/events-edit/events-edit.component'
import { EventsEdDelComponent } from './view/events-ed-del/events-ed-del.component';
import { LoginGuard } from './view/User/login/login.guard';

const routes: Routes =[
  
    { path: '',             component: HomeComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',           component: LoginComponent  },
    { path: 'events',     component: EventsComponent},
    { path: 'events_create',          component: EventsCreateComponent,canActivate : [LoginGuard]},
    { path: 'editar',          component: EventsEdDelComponent,canActivate : [LoginGuard] },
    { path: 'profile',           component: PerfilComponent, canActivate : [LoginGuard]  },
    { path: 'edit_event',          component: EventsEditComponent,canActivate : [LoginGuard]},
  

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
