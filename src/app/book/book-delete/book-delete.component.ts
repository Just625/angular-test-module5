import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router
    , private notificationService: NotificationService) {
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

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.notificationService.showSuccessMsg('Book deleted!');
      this.router.navigateByUrl('/books/list');
    }, e => {
      console.log(e);
    });
  }
}
