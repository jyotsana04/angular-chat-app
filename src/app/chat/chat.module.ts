import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';

import {RouterModule, Routes} from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import{ToastrService} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {UserDetailComponent} from '../shared/user-detail/user-detail.component'
import { RemoveSpecialCharPipe } from '../shared/pipe/remove-special-char.pipe';
import {ChatRouteGuardService} from './chat-route-guard.service'



@NgModule({
  declarations: [ChatBoxComponent, RemoveSpecialCharPipe],
  imports: [
    CommonModule,BrowserAnimationsModule,
    RouterModule.forChild([
      {path:'chat', component:ChatBoxComponent, canActivate:[ChatRouteGuardService]}
    ]),
    SharedModule
  ],
  providers:[ChatRouteGuardService]
})
export class ChatModule { }
