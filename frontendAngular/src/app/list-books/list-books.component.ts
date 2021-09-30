import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { ListBooksService } from '../services/list-books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  public books$ : Promise<Book[]> | undefined;
  constructor(
    private listBooksService: ListBooksService
  ) { }

  ngOnInit(): void {
    this.books$= this.listBooksService.getAllBooks();
    console.log(this.books$);
  }

}
