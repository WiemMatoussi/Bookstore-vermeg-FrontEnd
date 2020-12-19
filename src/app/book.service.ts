import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 uri='http://localhost:5445/bookstore/api/book/totalprice';
 constructor(private http: HttpClient) { }

 addBook(id: any, reference: any, title: any, author: any, releaseDate:any, unitPrice:any){
  const obj = {
  id,
  reference,
  title,
  author,
  releaseDate,
  unitPrice
  };
  console.log(obj);
  this.http.post('${this.uri}/addBook', obj)
  .subscribe(res => console.log('Done'));
}

calculate() {
  return this.http.get(this.uri)

  
}

}

