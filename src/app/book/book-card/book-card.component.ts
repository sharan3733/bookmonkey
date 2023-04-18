import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  @Input() content!: Book;
  @Output() detailClick = new EventEmitter<Book>();
customstyle ={
  color: 'green'
};
handleDetailedClicked(click: MouseEvent){
  click.preventDefault()

  this.detailClick.emit(this.content);
}
}
