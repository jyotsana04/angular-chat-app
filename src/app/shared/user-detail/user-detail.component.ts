import { Component, OnInit , OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userFirstName: any;
  @Input() userLastName: string;
  @Input() userStatus: string;
  @Input() messageRead: string;

  
  public firstChar: string;


  constructor() { }

  ngOnInit():void {

    this.firstChar = this.userFirstName[0];
  }

}
