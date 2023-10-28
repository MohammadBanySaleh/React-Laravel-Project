<?php

namespace App\Http\Controllers;

// use Session;
use App\Models\Admin;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{


    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $admin = Admin::where('email', $email)->first();

        if ($admin && $admin->password == $password) {

            session(['admin_logged_in' => true]);
            return redirect('/');
        }

        // Authentication failed, redirect back with an error message.
        return redirect()->route('login')->with('error', 'Invalid email or password');
    }


    public function logout()
    {
        Auth::logout();
        session()->forget('admin_logged_in');
        return redirect()->route('login');
    }

    public function index()
    {
        $admin = Admin::all();
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();

        return view('admin/admin_admin', compact('admin', 'adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));
    }

    public function create()
    {


        return view('admin/admin_admin_create ');
    }




    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|max:80',
            'email' => 'required|email|unique:admins',
            'password' => 'required|min:8',
        ]);

        $admin = new Admin($request->all());
        $relativeImagePath = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $relativeImagePath = '/' . $newImageName;
        }

        // Create a new Admin record and set the 'image' field to the path
        $admin->image = $relativeImagePath;
        $adminId = $admin->id;
        $admin->save();


        return redirect()->route('admin_admin.index', ['admin' => $adminId])->with('success', 'Admin created successfully');
    }

    public function edit(Admin $admin_admin)
    {
        return view('admin/admin_admin_edit', compact('admin_admin'));
    }

    public function update(Request $request, Admin $admin_admin)
    {

        $request->validate([
            'name' => 'required|max:80',
            'password' => 'required|min:8',
        ]);

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Check if a file has been uploaded and update the image if necessary
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $admin_admin->image = '/' . $newImageName;
        }

        $admin_admin->update($request->except('image'));

        return redirect(route('admin_admin.index'))->with('success', 'Admin updated successfully.');
    }



    public function destroy($id)
    {
        $admin = Admin::find($id);
        $admin->delete();
        return redirect()->route('admin_admin.index', ['admin' => $id])->with('success', 'Admin deleted successfully');
    }
}
