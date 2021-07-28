import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('',[Validators.required]),
    description: new FormControl()
  });

  constructor(private bookService: BookService, private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  addBook() {
    if (this.bookForm.valid) {
      const book = this.bookForm.value;
      this.bookService.addBook(book).subscribe(() => {
        this.notificationService.showSuccessMsg('Book added!');
      }, e => {
        console.log(e);
      });
    }
  }
}
