import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { BookComponent } from '../book/book.component';
import { PageNoFoundComponent } from '../page-no-found/page-no-found.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';

const routes: Routes= [
  {path: '', pathMatch:'full', redirectTo: '/books'},
  {path: 'about', component: AboutComponent},
  {path: 'books', component: BookComponent },
  {path: 'books/details/:isbn', component: BookDetailComponent },
  {path: '**', component: PageNoFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
