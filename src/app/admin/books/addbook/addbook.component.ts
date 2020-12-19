import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
import { HttpClientService } from 'src/app/http-client.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  @Input()
  book: Book = new Book;
  private selectedFile: any;
  imgURL: any;
  @Output()
  bookAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveBook() {

//If there is no book id then it is an add book call else it is an edit book call
if (this.book.id == null) {

       
          this.httpClientService.addBook(this.book).subscribe(
            (book: any) => {
              this.bookAddedEvent.emit();

              this.router.navigate(['admin', 'books']);
            }
          );
        
          }else {
            this.httpClientService.updateBook(this.book).subscribe(
              (book) => {
                this.bookAddedEvent.emit();
                this.router.navigate(['admin', 'books']);
              }
            );
          }
      
      
  } /*
  angForm!: FormGroup;
  constructor(private fb: FormBuilder, private ps: BookService) {
  
    this.createForm();
  }
  
  createForm() {
  this.angForm = this.fb.group({
  ProductName: ['', Validators.required ],
  ProductDescription: ['', Validators.required ],
  ProductPrice: ['', Validators.required ]
  });
  }
  
  addBook(id: any, reference: any, title: any, author: any, releaseDate: any, unitPrice: any) {
  this.ps.addBook(id, reference, title, author, releaseDate, unitPrice);
  }
  
  ngOnInit() {
  }
  */

  
}
