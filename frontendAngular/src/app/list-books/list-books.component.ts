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
   this.getListBooks();
  }

  getListBooks = ()=>{
    this.books$= this.listBooksService.getAllBooks();
    console.log(this.books$);
  }
  deleteBook = (id: number | undefined )=>{

    if(confirm("Esta seguro de eliminar el Libro")){

      this.listBooksService.deleteBookById(id)
      .then(resp =>{
        alert("Se elimino correctamente");
      }).catch(err =>{
        alert("Se presento un error al eliminar");
        console.log(err)
      }).finally(()=>{
        this.getListBooks();
      })

    }
  }

}
