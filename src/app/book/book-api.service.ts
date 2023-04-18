import { Injectable, OnInit } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookApiService  {

 public books: Book[] = [];
 private endpoint = 'http://localhost:4730';


  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:4730/books');
  }
  searchByTitle(booksearchTerm: string){
   // this.filteredBook$ = this.books.filter((book))
  }
  getBookByIsbn(isbn: string){
   return this.http.get('http://localhost:4730/books/:isbn');
  }
  getByIsbn(isbn: string): Observable<Book>{
    return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);

  }
  }

