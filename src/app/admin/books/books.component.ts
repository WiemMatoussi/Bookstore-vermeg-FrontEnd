import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { HttpClientService } from 'src/app/http-client.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book> = [];
  selectedBook: any;
  action: any;
  booksRecieved: any;



  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
   }
   handleSuccessfulResponse(response: Book[]) {
    this.books = new Array<Book>();
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {
    
      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.reference = book.reference;
      bookwithRetrievedImageField.title = book.title;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.releaseDate=book.releaseDate;
      bookwithRetrievedImageField.unitPrice=book.unitPrice;
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;

      this.books.push(bookwithRetrievedImageField);
    }
  }
  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
	// get the parameter id. this will be the id of the book whose details 
	// are to be displayed when action is view.
	const id = params['id'];
	// if id exists, convert it to integer and then retrive the book from
	// the books array
        if (id) {
          this.selectedBook = this.books.find(book => {
            return book.id === +id;
          });
        }
      }
    );
  }

  addBook() {
    this.selectedBook = new Book();
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'add' } });
  }

  viewBook(id: number) {
    this.router.navigate(['admin', 'books'], { queryParams: { id, action: 'view' } });
  }
  }