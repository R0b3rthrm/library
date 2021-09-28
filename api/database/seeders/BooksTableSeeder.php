<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        Book::truncate();
        
        $faker = \Faker\Factory::create();

        for($i=0 ;$i < 12; $i++){
            
            Book::create([
                'title' => $faker->sentence, 
                'cover'=> $faker->sentence,
                'synopsis'=> $faker->paragraph,
                'author'=> $faker->sentence,
                'genre'=> $faker->sentence,
                'year' => $faker->randomDigit,
            ]);

        }
    }
}
