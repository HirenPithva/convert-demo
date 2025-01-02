// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { ProductListComponent } from "./product-list.component";
// import { OverviewComponent } from "./overview/overview.component";
// import { CheckoutPageComponent } from "./checkout/checkout-page.component";

import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";

// let route: Routes = [
//     {path: "",
//         component:ProductListComponent,
//         children:[
//             {path:"list", component: OverviewComponent},
//             {path:"details/:id", component: CheckoutPageComponent},
//         ]
//     }
// ];

// @NgModule({
//     imports:[RouterModule.forChild(route)],
//     exports:[RouterModule]
// })

// export class ProductRouterModule{


// }

export const Product_routes: Routes = [
    {path: "",
        component:ProductListComponent,
        children:[
            {path:"list", loadComponent: ()=>{return import("././overview/overview.component").then((com)=>  com.OverviewComponent)}},
            {path:"details/:id", loadComponent: ()=>{return import("./checkout/checkout-page.component").then((com)=>com.CheckoutPageComponent)}},
        ]
    }
];
