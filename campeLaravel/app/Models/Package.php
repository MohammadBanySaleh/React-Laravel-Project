<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'image',
        'category_id',
        'price',
        'number_of_person',
    ];


    public function category()
    {
        return $this->belongsTo(Category::class , 'category_id');
    }

    public function product()
    {
        return $this->hasMany(Product::class);
    }

    public function review()
    {
        return $this->hasMany(Review::class);
    }
    public function booking()
    {
        return $this->hasMany(Booking::class);
    }
}
