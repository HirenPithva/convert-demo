// import { NgModule } from "@angular/core";
// import { NgModel } from "@angular/forms";
// import { SnackbarComponent } from "../snackbar/snackbar.component";

// @NgModule({
//     declarations:[SnackbarComponent],
//     exports:[SnackbarComponent]
// })
// export class SharedModule{

// }

//1. snackBar:  non-standlone ,  home component: standlone , product: non-standlone
// home is dependent on snackbar, same way product also dependent on snackbar.
// have to create shared module for this snackbar component and need to import in stanlone component.