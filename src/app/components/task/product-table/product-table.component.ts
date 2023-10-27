import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

@Input()
  products :  Iproduct[]=[];



}
