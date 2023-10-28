<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index()
    {
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();
        return view('admin/admin_user', compact('adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));

        
    }

    public function create()
    {


        return view('admin/admin_user_create ');
    }




    public function store(Request $request)
    {

        $adminUser = User::create($request->all());
        $userId = $adminUser->id;
        $adminUser->save();


        return redirect()->route('admin_user.index', ['adminUser' => $userId])->with('success', 'User created successfully');
    }

    public function edit(User $adminUser)
    {



        return view('admin/admin_user_edit', compact('adminUser'));
    }

    public function update(Request $request, User $adminUser)
    {

        $adminUser->update($request->all());



        return redirect(route('admin_user.index'))->with('success', 'User updated successfully.');
    }



    public function destroy($id)
    {
        $adminUser = User::find($id);
        $adminUser->delete();
        return redirect()->route('admin_user.index', ['adminUser' => $id])->with('success', 'User deleted successfully');
    }
}
