import { Book } from './../book';
import { Component, OnInit } from '@angular/core';
import { Observable , switchMap} from 'rxjs';

import { BookApiService } from '../book-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit{


  book$!: Observable<Book>;
  isbn!: String;
  title: string = '';

  constructor( private bookApi: BookApiService, private route: ActivatedRoute) {}
    ngOnInit() {
     this.book$ = this.route.params.pipe(

      switchMap(params => this.bookApi.getByIsbn(params?.['isbn']))
    );
  }
  saveChanges(ev:Book) {
    console.log(ev);

  }

}




