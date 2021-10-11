import {useState, useEffect} from 'react';
import BookService from '../services/BookService'; 
import {Link} from 'react-router-dom';

const BookList =()=>{
    const [books, setBooks ] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    useEffect(()=>{
        retriveBooks();
    },[]);

    const retriveBooks = () =>{
        BookService.getAllBooks()
        .then(resp => {
            setBooks(resp.data);
            console.log(resp);
        })
        .catch(err => {
            alert("Se presento un error");
            console.log(err);
        })
    }

    const refreshList = () =>{
        retriveBooks();
    }

    const setActiveBook = (book)=>{
        setCurrentBook(book);
    }

    const deleteBook = (id) =>{
        if(!window.confirm("Esta seguro de eliminar este libro"))
            return;

        BookService.deleteBook(id)
        .then(resp =>{
            refreshList();
            alert("Se elimino correctamente el Libro")
        }) .catch(err=>{
            console.log(err);
            alert("Se produjo un error al borrar el libro");

        });
    }


    return (
        <div className="row">
            <div className="col-6">

                <h4>Libros Registrados</h4>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Libro</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {books &&
                        books.map((book, index)=>(
                            <tr key={index}>
                                <th>{book.id}</th>
                                <td>{book.title}</td>
                                <td>{book.genre}</td>
                                <td>
                                    <div className="row">
                                    <div className="col-4"><button type="button" onClick={()=>setActiveBook(book)} className="btn btn-circle btn-info btn-xs"><i className="bi bi-eye"></i></button></div>
                                    <div className="col-4"><Link to={"/book/"+book.id}><button type="button" className="btn btn-circle btn-warning btn-xs"><i className="bi bi-pencil"></i></button></Link></div>
                                    <div className="col-4"><button type="button" onClick={()=>deleteBook(book.id)} className="btn btn-circle btn-danger btn-xs"><i className="bi bi-trash"></i></button></div>
                                    </div>
                                </td>
                            </tr>
                        
                        ))}
                    
                    </tbody>
                </table>
            </div>
            <div className="col-6">
                {(currentBook)?
                (
                    <div>
                        <h4>{currentBook.title}</h4>
                        <hr/>
                        <div>
                            <b>Autor: </b>
                            {currentBook.author}
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <b>Genero: </b>
                                {currentBook.genre}
                            </div>
                            <div className="col-6">
                                <b>Año: </b>
                                {currentBook.year}
                            </div>
                        </div>
                        <div>
                            <b>Sinopsis: </b>
                            {currentBook.synopsis}
                        </div>
                        <div>
                            <img className="img-fluid" src={currentBook.cover}  />
                        </div>
                            
                    </div>
                )
                :(  <div>
                        <br/>
                        <p>Seleccionar primero un libro..</p>
                    </div>
                )}  
            </div>
        </div>
    )
};

export default BookList;