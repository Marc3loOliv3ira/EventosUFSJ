import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EventsService } from './view/events/events.service';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HomeComponent } from './view/home/home.component';
import { EventsComponent } from './view/events/events.component';
import { TesteComponent } from './view/teste/teste.component';
import { HeaderComponent } from './view/header/header.component';
import { LoginComponent } from './view/User/login/login.component';
import { SignupComponent } from './view/User/signup/signup.component';
import { EventsCreateComponent } from './view/events-create/events-create.component';
import { PerfilComponent } from './view/User/perfil/perfil.component';
import {HttpClientModule} from '@angular/common/http';
import { EventsEditComponent } from './view/events-edit/events-edit.component';
import { EventsEdDelComponent } from './view/events-ed-del/events-ed-del.component';
import { LoginGuard } from './view/User/login/login.guard';
import { Globals } from './view/globals/globals';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EventsComponent,
    TesteComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    EventsCreateComponent,
    PerfilComponent,
    EventsEditComponent,
    EventsEdDelComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EventsService,LoginGuard,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
