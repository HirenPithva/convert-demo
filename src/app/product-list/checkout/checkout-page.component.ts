import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../Model/Product';
import { product_service } from '../../app-routing.module';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
  standalone:true,
  imports:[CommonModule,SnackbarComponent ]
})
export class CheckoutPageComponent implements OnInit {
  snackBarFlag:boolean=false;
  objProductService: ProductService;
  constructor(@Inject(product_service) objProductService: ProductService, private activeRoute: ActivatedRoute){
    this.objProductService = objProductService;
  }
  router:Router = inject(Router);
  product:Product | undefined;

  ngOnInit(){
    console.log("checkout component oninit method fires!")
    let productId = this.activeRoute.snapshot.paramMap.get("id");
    console.log("productId", productId);
    // Trick 1: to retrive data from service
    this.product = this.objProductService.productList.filter(i=> i.id == productId)[0];

  }
  OnClickfn(){
    this.snackBarFlag = !this.snackBarFlag;
  }
}
