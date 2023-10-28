<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([

            [
                'name' => 'Mountain shoes',
                'image' => '/Product1_5641aae5-28bb-4519-884c-7caef335c613754d.jpg',
                'package_id' => 1,
            ],

            [
                'name' => 'Gas',
                'image' => '/Product3_a1ba4ec9-dfe9-4c92-ab13-37ff4174b8fb3f40.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'Compass',
                'image' => '/Product4_480x480@2xc579.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'telescope',
                'image' => '/Product5_e4ab6283-7fe8-44c7-8f49-51a62a84a178239c.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'luggage',
                'image' => '/Product6_480x480@2x5d19.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'Backpack',
                'image' => '/Product7fdef.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'Multi-use knife',
                'image' => '/Product8_19c2a705-0d8a-48d0-a8f5-d05d6a42ffaea3f3.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'Teapot',
                'image' => '/Product9f7d1.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'bracelet',
                'image' => '/Product14f6b9.jpg',
                'package_id' => 1,
            ],
            [
                'name' => 'hand bag',
                'image' => '/Product15@2x9709.jpg',
                'package_id' => 1,
            ],

            [
                'name' => 'a pot',
                'image' => '/Product16_691ca107-f13b-4adf-a9b2-31651ef9078c5d19.jpg',
                'package_id' => 1,
            ],

            [
                'name' => 'Mountain shoes',
                'image' => '/Product17_35dafb00-ead6-452f-91ff-3bb9b2d0464926a3.jpg',
                'package_id' => 1,
            ],



            [
                'name' => 'shovel',
                'image' => '/Product23_480x480@2xb980.jpg',
                'package_id' => 1,
            ],



            [
                'name' => 'tent ',
                'image' => '/images (1).jfif',
                'package_id' => 1,
            ],



        ]);
    }
}
