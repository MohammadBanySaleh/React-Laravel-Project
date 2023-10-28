<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;



class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Outdoor Camping',
                'image' => '/outdoor_camping.png',
                'description' => 'Explore the great outdoors with our camping gear.',
            ],
            [
                'name' => 'Mountain Hiking',
                'image' => '/mountain_hiking.png',
                'description' => 'Conquer the peaks with the best hiking equipment.',
            ],
            [
                'name' => 'Beach Getaway',
                'image' => '/beach_getaway.png',
                'description' => 'Relax and enjoy the sun and sand with our beach gear.',
            ],
            [
                'name' => 'Winter Adventures',
                'image' => '/winter_adventures.jpg.png',
                'description' => 'Stay warm and have fun in the snow with our winter gear.',
            ],
        ];
    
        // Insert data into the 'categories' table
        foreach ($categories as $category) {
            DB::table('categories')->insert($category);
            
        }
    }
    }