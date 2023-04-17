import { Injectable, OnInit } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookApiService  {

 public books: Book[] = [
  {
    title: 'Hello Angular',
    author: 'sukhman',
    abstract:'loremgmwrmgkreemthhnmlmhkiti'
  },
  {
    title: 'Hello Java',
    author: 'sukhu',
    abstract:'loremgmwrmgkreemthhnmlmhkiti qsFAMFF NKJGN KGNG RK'

  }
]

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll(): Observable<Book[]>{
    return this.httpClient.get<Book[]>('http://localhost:4730/books');
  }
  }

