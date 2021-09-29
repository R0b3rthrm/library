import { Component, OnInit } from '@angular/core';
import { ListBooksService } from '../services/list-books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  constructor(
    private listBooksService: ListBooksService
  ) { }

  ngOnInit(): void {
    this.listBooksService.getAllBooks().subscribe();
  }

}
