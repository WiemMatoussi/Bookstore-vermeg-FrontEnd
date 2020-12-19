import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './admin/books/addbook/addbook.component';
import { BooksComponent } from './admin/books/books.component';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { TotalpriceComponent } from './totalprice/totalprice.component';

const routes: Routes = [
{ path: 'admin/books', component: BooksComponent },

{
  path: 'book/create', component: AddbookComponent
  },
  { path: 'shop', component: ShopbookComponent },

  { path: 'totalprice', component: TotalpriceComponent },
  
  { path: 'cart', component: TotalpriceComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
