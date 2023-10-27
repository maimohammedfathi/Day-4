import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  prodstsForm : Iproduct[]=[];

  getProducts(prds : any){
    this.prodstsForm = prds;
  }

}
