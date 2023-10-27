import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input()
  childvariable:string ='';


  colorSendToOtherchild : string = 'red';
  
  @Output()
  EventCTC : EventEmitter<string> = new EventEmitter <string> ;

  ngOnInit(): void {
    this.EventCTC.emit(this.colorSendToOtherchild);
  }

}
