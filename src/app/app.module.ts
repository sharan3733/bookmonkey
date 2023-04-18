import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNoFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
