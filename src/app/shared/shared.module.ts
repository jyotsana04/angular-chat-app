import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FirstCharComponent } from './first-char/first-char.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserDetailComponent, FirstCharComponent],
  imports: [
    CommonModule
  ],
  exports:[
    UserDetailComponent, FirstCharComponent,CommonModule, FormsModule
  ]
})
export class SharedModule { }
