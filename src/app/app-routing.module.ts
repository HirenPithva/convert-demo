import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { InjectionToken } from "@angular/core";
export const product_service =  new InjectionToken("product service token");

// let route: Routes =[
//   {path:"Home", component:HomeComponent},
//   {path:"Product", loadChildren: ()=>{return import("../app/product-list/Product-list.module").then((modueleClass) => modueleClass.ProductListModule);}}
// ] 



// let route: Routes =[
//   {path:"Home", component:HomeComponent},
//   {path:"Product", loadChildren: ()=>{return import("./product-list/product-router.module").then((route) =>route.Product_routes)}}
// ] 


// @NgModule({
//   imports: [RouterModule.forRoot(route)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



export const App_routes: Routes =[
  {path:"Home", component:HomeComponent},
  {path:"Product", loadChildren: ()=>{return import("./product-list/product-router.module").then((route) =>route.Product_routes)}}
] 


//1. if wanted to import standalone route to non standalone routes we can simply use import function and instead of module need to import variable of Routes class
