import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{ToastrModule} from 'ngx-toastr';

import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';


import { LoginComponent } from './user/login/login.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
//import { FirstCharComponent } from './shared/first-char/first-char.component'
//import {ToastrService} from 'ngx-toastr'


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, HttpClientModule,
     RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'*', component:LoginComponent},
      {path:'**', component:LoginComponent}
    ]),
    ChatModule, UserModule, SharedModule,
    BrowserAnimationsModule, ToastrModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
