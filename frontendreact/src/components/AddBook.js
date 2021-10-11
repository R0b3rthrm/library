import {useState} from 'react';
import BookService from '../services/BookService'; 
 
 const AddBook =()=>{

    const initialBookState={
        id: null,
        title :'',
        author :'',
        genre : '',
        cover :'',
        synopsis : '',
        year : 0,
    }
    const [book, setBook] = useState (initialBookState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event=>{
        const {name,value}=event.target;
        setBook({...book,[name]:value});
    }

    const saveBook = ()=>{
        let data ={
            title : book.title,
            author : book.author,
            genre : book.genre,
            cover : book.cover,
            synopsis : book.synopsis,
            year : book.year,
        }
    

        BookService.createBook(data)
        .then(resp =>{
            setBook({
                id: resp.data.id,
                title: resp.data.title,
                author: resp.data.author,
                genre: resp.data.genre,
                cover: resp.data.cover,
                synopsis: resp.data.synopsis,
                year: resp.data.year

            });

            setSubmitted(true);
            console.log(book);

        })
        .catch(err=>{
            console.log(err);
            alert("Se produjo un erro al craar el libro");

        });

    }
    const newBook = ()=>{
        setBook(initialBookState);
        setSubmitted(false);
    }
    return (
        <div className="submit-form">
            {submitted ? 
            <div className="submit-form">
                <h4>Has creado un libro</h4>
                <button onClick={newBook} className="btn btn-primary">Crear un nuevo Libro</button>
            </div>
            :
            <div>
                <h4>Crear Nuevo Libro</h4>
            <div className="form-group">
                <label>Titulo</label>
                <input id="title" name="title" type="text" className="form-control" value={book.title} onChange={handleInputChange} required/>
            </div>
            
            <div className="form-group">
                <label>Autor</label>
                <input id="author" name="author" type="text" className="form-control" value={book.author} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Genero</label>
                <input id="genre" name="genre" type="text" className="form-control" value={book.genre} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Portada</label>
                <input id="cover" name="cover" type="text" className="form-control" value={book.cover} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Año</label>
                <input id="year" name="year" type="number" className="form-control" value={book.year} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Sipnosis</label>
                <textarea rows="3"  id="synopsis" name="synopsis" type="text" className="form-control" value={book.synopsis} onChange={handleInputChange} required></textarea>
            </div>

            <br/>
            <button className="btn btn-success" onClick={saveBook}>Guardar Libro</button>

        </div>
            
            }
        </div>
    )
};

export default AddBook;