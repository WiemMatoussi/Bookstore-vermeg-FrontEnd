import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {
  }
  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:5445/bookstore/api/book/getAll');
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>('http://localhost:5445/bookstore/api/book/addBook', newBook);
  }

  deleteBook(id: number) {
    return this.httpClient.delete<Book>('http://localhost:5445/bookstore/api/book/deleteBook/' + id);
  }
  updateBook(book: Book) {
    return this.httpClient.put<Book>('http://localhost:5445/bookstore/api/book/updateBook',book);
  }

  Totalprice(list: Array<number>){
    return this.httpClient.post<Array<number>>('http://localhost:5445/bookstore/api/book/totalprice',list);
  }
}
