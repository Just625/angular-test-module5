import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../model/book';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number;
  successMsg = '';

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit() {
  }

  getBook(id: number) {
    this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title, [Validators.required]),
        author: new FormControl(book.author, [Validators.required]),
        description: new FormControl(book.description)
      });
    });
  }

  editBook(id: number) {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value;
      this.bookService.updateBook(id, book).subscribe(() => {
        this.notificationService.showSuccessMsg('Book updated!');
      }, e => {
        console.log(e);
      });
    }
  }
}
