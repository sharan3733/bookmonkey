import { BookApiService } from './book-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from './book';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy{

  title = 'FirstBootCamp';
  bookSearchTerm: string = '';

  books$!: Observable<Book[]>;
  private subscription = Subscription.EMPTY;

  constructor(private bookApiService: BookApiService,){

  }
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.books$ = this.bookApiService.getAll();
   }

  handleEmitFromChild(evt:Book){
    console.log(evt);
  }
  updateBookList(input: Event){
    this.bookSearchTerm =(input.target as HTMLInputElement).value;
  }

}
