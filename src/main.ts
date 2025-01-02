// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import {  App_routes, product_service } from "./app/app-routing.module";
import { provideRouter, withRouterConfig } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { Product_routes } from "./app/product-list/product-router.module";
import { ProductService } from "./app/service/product.service";

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true,
// })
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
    // providers:[ importProvidersFrom(AppRoutingModule), {provide: product_service, useClass:ProductService}]
    providers:[ provideRouter(App_routes), {provide: product_service, useClass:ProductService}]
})
  
//1. appcomponent truned into standalone component. and to bootstrap standalone component there is different method to do that.

//2.  importProvidersFrom is used to use the module as service and retrieve the routes from the file.

// 3. for the standalone route we requried ProvideRouter method for registering all the routes