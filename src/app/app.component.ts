import { Component } from '@angular/core';
import { Book } from './book';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstBootCamp';
 public books: Book[] = [{
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
  handleEmitFromChild(evt:Book){
    console.log(evt);
  }

}
