import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports:[CommonModule, FormsModule, SnackbarComponent  ]
})
export class HomeComponent {
  socialPosts: any[] = [
    {
      image: "https://picsum.photos/200/300?random=100",
      id: 1
    },
    {
      image: "https://picsum.photos/200/300?random=101",
      id: 2
    },
    {
      image: "https://picsum.photos/200/300?random=102",
      id: 3
    },
    {
      image: "https://picsum.photos/200/300?random=103",
      id: 4
    },
    {
      image: "https://picsum.photos/200/300?random=104",
      id: 5
    },
    {
      image: "https://picsum.photos/200/300?random=105",
      id: 6
    },
  ];

  categories = [
    { name: 'Men', image: "https://picsum.photos/200/300?random=200" },
    { name: 'Women', image: "https://picsum.photos/200/300?random=201" },
    { name: 'Kids', image: "https://picsum.photos/200/300?random=202" },
    { name: 'Sports', image: "https://picsum.photos/200/300?random=203" },
  ];

  contact = {
    name: '',
    email: '',
    message: '',
  };

  submitContactForm(){

  }
  snackBarFlag:boolean = false;
  OnClickfn(){
    this.snackBarFlag = !this.snackBarFlag;
  }
}
