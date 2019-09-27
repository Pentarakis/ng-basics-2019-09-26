import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'ngb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book = new Book();

  @Output()
  addNewBook: EventEmitter<Book> = new EventEmitter<Book>();

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    const id = this.route.snapshot.params.id;
    this.book = this.bookService.getBookById(Number(id));
  }

  ngOnInit() {
  }

  save() {
    if (this.book.id) {
      this.book = new Book();
    } else {
      this.addNewBook.emit(this.book);
    }
  }

}
