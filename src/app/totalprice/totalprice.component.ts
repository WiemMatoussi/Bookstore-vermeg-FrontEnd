import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-totalprice',
  templateUrl: './totalprice.component.html',
  styleUrls: ['./totalprice.component.css']
})
export class TotalpriceComponent implements OnInit {
  total: number;
  cartBooks: any;
  bookss!: Array<number>;
  booksRecieved: Book[] = [];
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
        this.bookss= new Array<number>();
        this.booksRecieved = response;
        
      }
    
  calculate(){
    this.httpClientService.Totalprice(this.bookss).subscribe(
     (bookss) => bookss
    );
     
  }
}
