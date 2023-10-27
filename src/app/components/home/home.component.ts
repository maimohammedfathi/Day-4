import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
parentvariable:string = 'Data From Parent';

getChildData:string = '';



getData(x : string){
this.getChildData = x ;
}


childColor:string = '';
getColorFromChild(c : string){
this.childColor = c ;
}
}
