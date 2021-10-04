import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BookComponent } from './book/book.component';
import { ListBooksComponent } from './list-books/list-books.component';

const routes: Routes = [
  {path: 'list-books', component:ListBooksComponent},
  {path: 'book/:id', component:BookComponent},
  {path: 'book-form/:id', component:BookFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
