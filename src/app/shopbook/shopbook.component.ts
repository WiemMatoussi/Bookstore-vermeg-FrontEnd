import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-shopbook',
  templateUrl: './shopbook.component.html',
  styleUrls: ['./shopbook.component.css']
})
export class ShopbookComponent implements OnInit {

  books!: Array<Book>;
  bookss!: Array<number>;
  booksRecieved!: Array<Book>;
  cartBooks: any;
  total : number;
  booksss!: number;

  constructor(private router: Router, private httpClientService: HttpClientService ,bookService :BookService) { 
this.total=0;
    
  }


  ngOnInit() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartBooks = JSON.parse(data);
    } else {
      this.cartBooks = [];
    }
  }

  handleSuccessfulResponse(response: Book[]) {
    this.books = new Array<Book>();
    this.bookss= new Array<number>();
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.reference = book.reference;
      bookwithRetrievedImageField.title = book.title;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.releaseDate=book.releaseDate;
      bookwithRetrievedImageField.unitPrice=book.unitPrice;

      this.books.push(bookwithRetrievedImageField);

      
    }
  }
  addToCart(bookId: any) {
    let book = this.books.find(book => {
      
      return book.id === +bookId;
    });
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    this.bookss.push(bookId);
    cartData.push(book);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    book!.isAdded = true;
  }
 calculate(){
  this.httpClientService.Totalprice(this.bookss).subscribe(
   (bookss) => bookss
  );
   
}
  updateCartData(cartData: any) {
    this.cartBooks = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartBooks = [];
    this.bookss=[];
    localStorage.clear();
  }

  

}