import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Model/Product';
import { ProductService } from '../../service/product.service';
import { product_service } from '../../app-routing.module';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports:[ProductComponent, CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  selectedProduct: Product|undefined ;

  products:Product[] = [];



  router = inject(Router)

  

  constructor(@Inject(product_service) private objProductService: ProductService){
    this.products = this.objProductService.GetAllProduct();
  }

  
  SetSelectedProduct(item: Product){
    console.log("selectedProduct:",item);
    this.selectedProduct = item;
    //this.objProductService.ProductSelected(item);

    this.router.navigate(["Product/details/", item.id]);
  } 


}

