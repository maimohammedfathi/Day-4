import { Component, EventEmitter, OnInit, Output , Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  childData:string = 'Data From Child';

  @Output()
  myEvent:EventEmitter<string> = new EventEmitter<string>;

  sendData(){
    this.myEvent.emit(this.childData);
  }

  ngOnInit(): void {
    this.myEvent.emit(this.childData);
  }

  @Input()
  colorFromChild1:string ='';
}
