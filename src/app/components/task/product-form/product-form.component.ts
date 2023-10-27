import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {

  productName: string = '';
  productPrice: number = 0;

  products: Iproduct[] = [{ prdName: 'laptop', prdPrice: 1212 }];

  @Output()
  myEvent: EventEmitter<Iproduct[]> = new EventEmitter<Iproduct[]>();

  ngOnInit(): void {
    this.myEvent.emit(this.products);
  }


  get isNameValid() {
    return this.productName != null && this.productName.length > 5;
  }

  get IsPriceValid() {
    return this.productPrice >= 1000 && this.productPrice <= 9000;
  }

  AddPrd() {
    console.log(this.productName, this.productPrice);
    this.products.push({
      prdName: this.productName,
      prdPrice: this.productPrice,
    });
    this.productName = '';
    this.productPrice = 0;
    console.log(this.products);
  }
}
