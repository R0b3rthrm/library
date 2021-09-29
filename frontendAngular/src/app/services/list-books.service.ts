import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ListBooksService {
  private url = environment.urlEndPoint;  
  constructor(
    private httpCliente:HttpClient
  ) { }

  getAllBooks = ()=>{
    return this.httpCliente.get(this.url+'books');
  }
}
