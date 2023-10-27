import { Component, Input ,OnChanges , OnDestroy, OnInit , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  templateUrl: './component-life-cycle.component.html',
  styleUrls: ['./component-life-cycle.component.css']
})
export class ComponentLifeCycleComponent {

  
  @Input()
  test:number = 0;
  
  
  
  constructor(){
    console.log('1- Constructor');
    // intialization variables
    // inject Services
  }
  

  ngOnInit(): void {
    console.log("2- OnInit");
    // connect with api 
    // use services    
    // prompt("Enter name");
  }

  @Input()
  inData:string = '';
mychanges : string[]=[];
lastpreviousValue: string='';
firstChange:boolean = true;

ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("3-changes");
    console.log(changes);
    this.mychanges.push(changes['inData'].currentValue);
    this.lastpreviousValue = changes['inData'].previousValue;
    this.firstChange = changes['inData'].firstChange;
  }

  ngOnDestroy(): void {
    console.log("Last to run");
    // close connection 
    // unsubscripe to observables
  }

}
