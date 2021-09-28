<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index(){
        return Book::all();
    } 

    public function show($id){
        return Book::find($id);
    } 

    public function store(Request $request){
        $book = Book::create($request->all());
        return response()->json($book,201);
    } 

    public function update(Request $request, $id){
        $book = Book::findOrFail($id);
        $book->update($request->all());

        return response()->json($book,200);
    } 

    public function delete($id){
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json($book->title,204);
    } 
}
