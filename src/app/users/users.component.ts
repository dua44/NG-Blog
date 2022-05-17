import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 @Input() project:any; 
  constructor() { }
  @Output() parentComponent : EventEmitter<any>= new EventEmitter();
  ngOnInit(): void {
    
    console.log('project->'+JSON.stringify(this.project)); 
    
  }
  SendData()
  {
    let item={name:"muhammad rIZwan",Age:14}
    this.parentComponent.emit(item);

  }

}
