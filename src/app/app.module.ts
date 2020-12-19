import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BooksComponent } from './admin/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbookComponent } from './admin/books/addbook/addbook.component';
import { BookService } from './book.service';
import { ViewbookComponent } from './admin/books/viewbook/viewbook.component';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { TotalpriceComponent } from './totalprice/totalprice.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
    ShopbookComponent,
    TotalpriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
