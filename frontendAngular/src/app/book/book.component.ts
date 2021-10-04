import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/Book';
import { ListBooksService } from '../services/list-books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public book$: Promise<Book> | undefined;
  constructor(
    private listBookService: ListBooksService,
    private activatedRouted: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.getBook();
  }

  getBook=async()=>{
    let routeParamId : string | number | null = this.activatedRouted.snapshot!.paramMap.get("id");
    if(routeParamId){
      routeParamId = parseInt(routeParamId);
      this.book$= this.listBookService.getBookById(routeParamId);
    }
  }

}
 