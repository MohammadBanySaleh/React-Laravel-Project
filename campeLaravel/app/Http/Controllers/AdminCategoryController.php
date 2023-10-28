<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;

class AdminCategoryController extends Controller
{
    public function index()
    {
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();



        return view('admin/admin_categories', compact('adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));
    }

    public function create()
    {

        return view('admin/admin_categories_create');
    }




    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:80',

            'description' => 'nullable|string|max:250', // Make the description field optional and limit its length.
        ]);

        $adminCategories = new Category($request->all());

        $relativeImagePath = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $relativeImagePath = '/' . $newImageName;
        }

        // Create a new Admin record and set the 'image' field to the path
        $adminCategories->image = $relativeImagePath;
        $adminCategories->save();

        $categoryId = $adminCategories->id;

        // Category::create($request->all());
        return redirect()->route('admin_categories.index', ['adminCategories' => $categoryId])->with('success', 'Category created successfully');
    }

    public function edit(Category $adminCategory)
    {
        return view('admin/admin_categories_edit', compact('adminCategory'));
    }

    public function update(Request $request, Category $adminCategory)
    {

        $request->validate([
            'name' => 'required|max:255',
            'description' => 'nullable|string|max:250',
        ]);

        $adminCategory->update($request->all());

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $adminCategory->image = '/' . $newImageName;
        }

        $adminCategory->update($request->except('image'));

        return redirect(route('admin_categories.index'))->with('success', 'Category updated successfully.');
    }



    public function destroy($id)
    {
        $adminCategory = Category::find($id);
        $adminCategory->delete();
        return redirect()->route('admin_categories.index', ['adminCategory' => $id])->with('success', 'Category deleted successfully');
    }
}
