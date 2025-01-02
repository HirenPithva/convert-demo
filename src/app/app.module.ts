import { InjectionToken, NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { MainMenuComponent } from './header/main-menu/main-menu.component';
// import { TopMenuComponent } from './header/top-menu/top-menu.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { TopHeaderComponent } from './top-header/top-header.component';
// import { SearchComponent } from './product-list/search/search.component';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterModule, Routes, withDebugTracing } from '@angular/router';
// import { OverviewComponent } from './product-list/overview/overview.component';
// import { ProductService } from './service/product.service';
// import { CheckoutPageComponent } from './product-list/checkout/checkout-page.component';
// import { HomeComponent } from './home/home.component';
// import { ProductComponent } from './product-list/overview/product/product.component';
// import { SnackbarComponent } from './snackbar/snackbar.component';
// import { ProductListModule } from './product-list/Product-list.module';
// import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    //AppComponent,
    //HeaderComponent,
    //MainMenuComponent,
    //TopMenuComponent,
    //TopHeaderComponent,
    //SearchComponent,
  ],
  imports: [
    //AppComponent,
    //HomeComponent,
    //BrowserModule,
    //FormsModule,
    //RouterModule.forRoot(route, {enableTracing: true})
    //SharedModule,
    //RouterModule,
   // AppRoutingModule
  ],
  //providers: [{provide: product_service, useClass: ProductService}],
  //bootstrap: [AppComponent]
  bootstrap: []
})
export class AppModule { }

// if some of the component is standalone and some of them is non standalon, 
// then standalone component will not be inside the declaration   
// but it's should be in import array