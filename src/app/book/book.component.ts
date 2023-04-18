import { BookApiService } from './book-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from './book';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private bookApiService: BookApiService,
    private router: Router){


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
  goToBookDetails(book: Book) {
    this.router.navigate(['books', 'details', book.isbn]);
  }
  updateBookList(input: Event){
    this.bookSearchTerm =(input.target as HTMLInputElement).value;
  }
  //this.book$ = this.bookApi.searchBytitle(this.booksearchTerm);


}
