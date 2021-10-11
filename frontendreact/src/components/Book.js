import {useEffect, useState} from 'react';
import BookService from '../services/BookService'; 
import {Link} from 'react-router-dom';

 
 const Book =(props)=>{

    const initialBookState={
        id: null,
        title :'',
        author :'',
        genre : '',
        cover :'',
        synopsis : '',
        year : 0,
    }
    
    const [currentBook, setCurrentBook] = useState(initialBookState);
    const [message, setMessage] = useState('');

    const getBook = (id) =>{
        BookService.getBookById(id)
        .then(resp => {
            setCurrentBook(resp.data);

        }).catch(err=>{
            console.log(err);
            alert("Se produjo un error al traer el libro");

        });

    }

    useEffect(()=>{
        getBook(props.match.params.id)
    }, [props.match.params.id])

    const handleInputChange = event=>{
        const {name,value}=event.target;
        setCurrentBook({...currentBook  ,[name]:value});
    }

    const updateBook = ()=>{

        BookService.updateBook(currentBook.id,currentBook)
        .then(resp =>{
            setMessage('El libro se actualizo correctamente')
        })
        .catch(err=>{
            console.log(err);
            setMessage("Se produjo un error al actualizar el libro");

        });

    }

    const deleteBook = ()=>{
        if(!window.confirm("Esta seguro de eliminar este libro")){
            return;
        }

        BookService.deleteBook(currentBook.id)
        .then(resp =>{
            alert("Se elimino correctamente el Libro")
            props.history.push('/');
        })
        .catch(err=>{
            console.log(err);
            setMessage("Se produjo un error al borrar el libro");

        });
    }
 
    
    return (
        <div className="submit-form">
            {!currentBook ? 
            <div className="submit-form">
                <h4>Debes seleccionar un libro</h4>
            </div>
            :
            <div>
                <h4>Actualizar Libro</h4>
                <hr/>
            <div className="form-group">
                <label>Titulo</label>
                <input id="title" name="title" type="text" className="form-control" value={currentBook.title} onChange={handleInputChange} required/>
            </div>
            
            <div className="form-group">
                <label>Autor</label>
                <input id="author" name="author" type="text" className="form-control" value={currentBook.author} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Genero</label>
                <input id="genre" name="genre" type="text" className="form-control" value={currentBook.genre} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Portada</label>
                <input id="cover" name="cover" type="text" className="form-control" value={currentBook.cover} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Año</label>
                <input id="year" name="year" type="number" className="form-control" value={currentBook.year} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Sipnosis</label>
                <textarea rows="3"  id="synopsis" name="synopsis" type="text" className="form-control" value={currentBook.synopsis} onChange={handleInputChange} required></textarea>
            </div>

            <br/>
            <button className="btn btn-success" onClick={updateBook}>Actualizar Libro</button>
            <button className="btn btn-danger" onClick={deleteBook}>Eliminar Libro</button>
            <Link to={"/"}><button className="btn btn-grey" >Regresar al Listado</button></Link>

           <br/> 
           <br/>    
           <div>
               <h3>{message}</h3>
           </div>
        </div>
         
            }
        </div>
    )
};

export default Book;