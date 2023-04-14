import { Injectable, OnInit } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookApiService  {

 public books: Book[] = [{
  title: 'Hello Angular',
  author: 'sukhman',
  abstract:'loremgmwrmgkreemthhnmlmhkiti'
},
{
  title: 'Hello Java',
  author: 'sukhu',
  abstract:'loremgmwrmgkreemthhnmlmhkiti qsFAMFF NKJGN KGNG RK'

}]

  constructor() { }

  getAll(){
    return this.books;

  }
}
