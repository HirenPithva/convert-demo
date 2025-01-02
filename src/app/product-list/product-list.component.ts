import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true,
  imports:[RouterModule, OverviewComponent]
})
export class ProductListComponent {
  // //product = {
  //   name: string = "redmi not 14 pro max"
  //   price: number = 29999
  //   color: string = "glaciar blue"
    
  // //}

  //customer: string = "hiren pithva" 
  addToCart: number = 0;
  product = {
    name : "redmi not 14 pro max",
    price : 29999,
    color : "glaciar blue",
    inStock: 0,

  }

  IncrementCartValue(){
    this.addToCart = this.addToCart + 1;
  }

  DecrementCartValue(){
    this.addToCart > 0? this.addToCart = this.addToCart - 1:this.addToCart;
  }

  GetCustomerName(Event: any)
  {
    // console.log(Event.target.value);
    //  this.customer=  Event?.target?.value;
  }
  Getdiscount(){
    return this.product.price - ((10)*this.product.price/100)
  }
}
