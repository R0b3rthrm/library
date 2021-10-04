import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})


export class ListBooksService {
  private url = environment.urlEndPoint;  
  constructor(
    private httpCliente:HttpClient
  ) { }
  
  createBook = async(book: Book):Promise<object>=>{
      return await this.httpCliente.post(this.url+'books', book).toPromise();
  }
  
  updateBook = async(id:string|number|null ,book: Book):Promise<object>=>{
      return await this.httpCliente.put(this.url+'books/'+id, book).toPromise();
  }

  getAllBooks = async():Promise<Book[]>=>{
    return await this.httpCliente.get(this.url+'books').toPromise() as Promise<Book[]>;
  }

  getBookById = async(id:number):Promise<Book>=>{
    return await this.httpCliente.get(this.url+'books/'+id).toPromise() as Promise<Book>;
  }

  deleteBookById = async(id:number | undefined):Promise<object>=>{
    return await this.httpCliente.delete(this.url+'books/'+id).toPromise() as Promise<object>;
  }
}
