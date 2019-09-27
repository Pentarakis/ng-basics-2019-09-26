import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'ngb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book = new Book();

  constructor() {
  }

  ngOnInit() {
  }

}
