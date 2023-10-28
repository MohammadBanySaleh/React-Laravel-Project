<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminCategoryController;
use App\Http\Controllers\AdminPackageController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AdminBookingController;
use App\Http\Controllers\AdminHomeController;
use App\Http\Controllers\AdminController;








/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/






Route::middleware(['admin'])->group(function () {
    Route::resource('/', AdminHomeController::class);
    Route::resource('admin/admin_categories', AdminCategoryController::class);
    Route::resource('admin/admin_package', AdminPackageController::class);
    Route::resource('admin/admin_product', AdminProductController::class);
    Route::resource('admin/admin_user', AdminUserController::class);
    Route::resource('admin/admin_booking', AdminBookingController::class);
    Route::resource('admin/admin_admin', AdminController::class);
});

Route::get('/login', function () {
    return view('auth.login');
})->name('login');

Route::post('/login', [AdminController::class, 'login'])->name('auth.login');

Route::post('/logout', [AdminController::class, 'logout'])->name('logout');

