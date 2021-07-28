import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit() {
  }

  getBook(id: number) {
    this.bookService.findById(id).subscribe(book => {
      this.book = book;
    }, e => {
      console.log(e);
    });
  }
}
