import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../../../Model/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone:true,
  imports:[CommonModule]
})
export class ProductComponent implements OnChanges {
  @Input()
  product:Product | undefined;

  constructor(){
    console.log("Initialised product component!")
  }
  ngOnChanges(){
    //console.log("this.product",this.product)
  }
}
