import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookViewComponent} from './book-view/book-view.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';


const routes: Routes = [{
  path: 'list',
  component: BookListComponent
}, {
  path: 'create',
  component: BookCreateComponent
}, {
  path: 'view/:id',
  component: BookViewComponent
}, {
  path: 'edit/:id',
  component: BookEditComponent
}, {
  path: 'delete/:id',
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
