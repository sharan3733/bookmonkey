import { BookModule } from './book/book.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { PageNoFoundComponent } from './page-no-found/page-no-found.component';


const routes: Routes= [
  {path: '', pathMatch:'full', redirectTo: '/'},
  {path: 'about', component: AboutComponent},
  {path: 'books', loadChildren: () => import('./book/book.module').then(module => module.BookModule)},
  {path: '**', component: PageNoFoundComponent}
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
