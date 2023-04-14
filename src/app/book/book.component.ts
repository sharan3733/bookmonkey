import { BookApiService } from './book-api.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{
  ngOnInit(): void {
   this.books = this.bookApiService.getAll();
  }
  title = 'FirstBootCamp';
  bookSearchTerm: string = '';
  books: Book[] = [];

  constructor(private bookApiService: BookApiService){

  }





  handleEmitFromChild(evt:Book){
    console.log(evt);
  }
  updateBookList(input: Event){
    this.bookSearchTerm =(input.target as HTMLInputElement).value;

  }

}
