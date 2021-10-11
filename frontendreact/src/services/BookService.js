import http from '../http-common';

const getAllBooks = ()=>{
    return http.get('books');
}

const getBookById = (id)=>{
    return http.get('books/'+id);
}

const createBook = (data)=>{
    return http.post('books',data);
}

const updateBook = (id,data)=>{
    return http.put('books/'+id,data);
}

const deleteBook = (id)=>{
    return http.delete('books/'+id);
}

export default {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};