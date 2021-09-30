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

  getAllBooks = async():Promise<Book[]>=>{
    return await this.httpCliente.get(this.url+'books').toPromise() as Promise<Book[]>;
  }
}
