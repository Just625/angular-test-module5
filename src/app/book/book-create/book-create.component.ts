import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private bookService: BookService, private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  addBook() {
    const book = this.bookForm.value;
    this.bookService.addBook(book).subscribe(() => {
      this.notificationService.showSuccessMsg('Book added!');
    }, e => {
      console.log(e);
    });
  }
}
