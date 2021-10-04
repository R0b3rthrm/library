import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/Book';
import { ListBooksService } from '../services/list-books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  public bookForm : FormGroup;
  public book: Book | undefined;
  public isEdit: boolean = false;
  private routeParamId: string| number| null=0;

  constructor(
    private formBuilder: FormBuilder,
    private listBookService : ListBooksService,
    private route:Router,
    private activatedRoute: ActivatedRoute,

  ) { 
    this.bookForm = this.formBuilder.group({
      title:['',Validators.required],
      author: ['', Validators.required],
      cover: ['', [Validators.required, Validators.minLength(15),Validators.maxLength(250)]],
      genre: ['', Validators.required],
      synopsis: ['', [Validators.required, Validators.minLength(15)]],
      year: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook=async()=>{
    this.routeParamId = this.activatedRoute.snapshot!.paramMap.get("id");
    if(this.routeParamId){
      this.routeParamId = parseInt(this.routeParamId);
      if(this.routeParamId === 0 ){
        this.isEdit = false;
        return;
      }
      this.isEdit =true;
      this.listBookService.getBookById(this.routeParamId).then(resp=>{
        this.bookForm.setValue({
          title: resp.title,
          author: resp.author,
          cover: resp.cover,
          genre: resp.genre,
          synopsis: resp.synopsis,
          year: resp.year,
        });

      }).catch(err=>{
        console.log(err);
        alert("Se presento un error");
      });
    }
  }
  onSubmit =(form:FormGroup)=>{
    console.log(form.valid);
    console.log(form.value); 
    if(form.valid){
      const call= (this.isEdit)? 
      this.listBookService.updateBook(this.routeParamId,form.value) :
      this.listBookService.createBook(form.value);
      call.then(resp => {
        console.log(resp);
        alert("Libro Gruadado Correctamente");
        this.route.navigateByUrl('/list-books');
      }).catch(err=>{
        console.log(err);
        alert("Se presento un error al Guardar");
      });
    }
  }
}
