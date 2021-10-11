import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link, Route, Switch} from  'react-router-dom';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Book from './components/Book';

function App() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link   to={"/"} className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/bookList"} className="nav-link active"  href="#">Libros</Link>
        </li>
        <li className="nav-item">
          <Link to={"/addBook"} className="nav-link" href="#">Agregar Libro</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>  
    <div className="container mt-3">
      <Switch>
        <Route exact path={["/","/bookList"]} component = {BookList}></Route>
        <Route exact path={"/addBook"} component = {AddBook}></Route>
        <Route exact path={"/book/:id"} component = {Book}></Route>
      </Switch>
    </div>
    </div>
  );
}

export default App;
