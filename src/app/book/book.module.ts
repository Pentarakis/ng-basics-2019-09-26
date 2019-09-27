import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BookComponent, BookListComponent],
  exports: [BookComponent, BookListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class BookModule { }
