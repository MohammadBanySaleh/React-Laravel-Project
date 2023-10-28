<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('packages')->insert([
            [
                'name' => "Solo Explorer's Package",
                'image' => '/istockphoto-865432748-170667a.webp',
                'description' => "Solo Explorer's Package: Embark on a solo adventure with all you need for a memorable journey into the wilderness.",
                'price' => 40,
                'category_id' => 1,
                'number_of_person' => 1,
            ],
            [
                'name' => "Couples' Getaway Package",
                'image' => "/package2.jpg",
                'description' => "Couples' Getaway Package: Experience romantic outdoor escapades with your loved one under the starry skies.",
                'price' => 80,
                'category_id' => 1,
                'number_of_person' => 2,
            ],
            [
                'name' => "Family Adventure Package",
                'image' => "/packge3.jpg",
                'description' => "Family Adventure Package: Create lasting memories with your family in the great outdoors, filled with fun activities.",
                'price' => 100,
                'category_id' => 1,
                'number_of_person' => 3,
            ],
            [
                'name' => "Friends' Camping Retreat",
                'image' => "/package4jpg.jpg",
                'description' => "Friends' Camping Retreat: Gather your friends for an unforgettable camping retreat full of laughter and bonding.",
                'price' => 110,
                'category_id' => 1,
                'number_of_person' => 4,
            ],



            // [
            //     'name' => "Solo Explorer's Package",
            //     'image' => '/istockphoto-865432748-170667a.webp',
            //     'description' => "Solo Explorer's Package: Embark on a solo adventure with all you need for a memorable journey into the wilderness.",
            //     'price' => 40,
            //     'category_id' => 2,
            //     'number_of_person' => 1,
            // ],
            // [
            //     'name' => "Couples' Getaway Package",
            //     'image' => "/package2.jpg",
            //     'description' => "Couples' Getaway Package: Experience romantic outdoor escapades with your loved one under the starry skies.",
            //     'price' => 80,
            //     'category_id' => 2,
            //     'number_of_person' => 2,
            // ],
            // [
            //     'name' => "Family Adventure Package",
            //     'image' => "/packge3.jpg",
            //     'description' => "Family Adventure Package: Create lasting memories with your family in the great outdoors, filled with fun activities.",
            //     'price' => 100,
            //     'category_id' => 2,
            //     'number_of_person' => 3,
            // ],
            // [
            //     'name' => "Friends' Camping Retreat",
            //     'image' => "/package4jpg",
            //     'description' => "Friends' Camping Retreat: Gather your friends for an unforgettable camping retreat full of laughter and bonding.",
            //     'price' => 110,
            //     'category_id' => 2,
            //     'number_of_person' => 4,
            // ],




            // [
            //     'name' => "Solo Explorer's Package",
            //     'image' => '/istockphoto-865432748-170667a.webp',
            //     'description' => "Solo Explorer's Package: Embark on a solo adventure with all you need for a memorable journey into the wilderness.",
            //     'price' => 40,
            //     'category_id' => 3,
            //     'number_of_person' => 1,
            // ],
            // [
            //     'name' => "Couples' Getaway Package",
            //     'image' => "/package2.jpg",
            //     'description' => "Couples' Getaway Package: Experience romantic outdoor escapades with your loved one under the starry skies.",
            //     'price' => 80,
            //     'category_id' => 3,
            //     'number_of_person' => 2,
            // ],
            // [
            //     'name' => "Family Adventure Package",
            //     'image' => "/packge3.jpg",
            //     'description' => "Family Adventure Package: Create lasting memories with your family in the great outdoors, filled with fun activities.",
            //     'price' => 100,
            //     'category_id' => 3,
            //     'number_of_person' => 3,
            // ],
            // [
            //     'name' => "Friends' Camping Retreat",
            //     'image' => "/package4jpg",
            //     'description' => "Friends' Camping Retreat: Gather your friends for an unforgettable camping retreat full of laughter and bonding.",
            //     'price' => 110,
            //     'category_id' => 3,
            //     'number_of_person' => 4,
            // ],




            // [
            //     'name' => "Solo Explorer's Package",
            //     'image' => '/istockphoto-865432748-170667a.webp',
            //     'description' => "Solo Explorer's Package: Embark on a solo adventure with all you need for a memorable journey into the wilderness.",
            //     'price' => 40,
            //     'category_id' => 4,
            //     'number_of_person' => 1,
            // ],
            // [
            //     'name' => "Couples' Getaway Package",
            //     'image' => "/package2.jpg",
            //     'description' => "Couples' Getaway Package: Experience romantic outdoor escapades with your loved one under the starry skies.",
            //     'price' => 80,
            //     'category_id' => 4,
            //     'number_of_person' => 2,
            // ],
            // [
            //     'name' => "Family Adventure Package",
            //     'image' => "/packge3.jpg",
            //     'description' => "Family Adventure Package: Create lasting memories with your family in the great outdoors, filled with fun activities.",
            //     'price' => 100,
            //     'category_id' => 4,
            //     'number_of_person' => 3,
            // ],
            // [
            //     'name' => "Friends' Camping Retreat",
            //     'image' => "/package4jpg",
            //     'description' => "Friends' Camping Retreat: Gather your friends for an unforgettable camping retreat full of laughter and bonding.",
            //     'price' => 110,
            //     'category_id' => 4,
            //     'number_of_person' => 4,
            // ],






        ]);
    }
}
