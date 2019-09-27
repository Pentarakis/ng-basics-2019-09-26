import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'ngb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  selectedBook: Book = new Book();

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit() {
  }

  save(book: Book) {
    book.id = this.createId();
    this.books.push(book);
  }

  createId(): number {
    const lastBook = this.books[this.books.length - 1];
    if (lastBook) {
      return lastBook.id + 1;
    }
    return 1;
  }
}
