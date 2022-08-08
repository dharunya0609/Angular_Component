import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [{path:'Home',component:HomeComponent},{path:'Books',component:BooksComponent},{path:'Cart',component:CartComponent},{path:'Contact',component:ContactComponent},{path:'Offers',component:OffersComponent}];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
