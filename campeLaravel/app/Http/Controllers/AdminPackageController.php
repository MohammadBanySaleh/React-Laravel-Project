<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;



class AdminPackageController extends Controller
{
    public function index()
    {
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();
        return view('admin/admin_package', compact('adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));
    }

    public function create()
    {
        $categories = Category::all();

        return view('admin/admin_package_create ', compact('categories'));
    }




    public function store(Request $request)
    {


        $request->validate([
            'name' => 'required|max:80',
            'category_id' => 'required|exists:categories,id',
            'price' => 'required|numeric|min:0',
            'number_of_person' => 'required|integer|min:1',
            'description' => 'nullable|string|max:250',
        ]);

        $adminPackage = Package::create($request->all());

        $relativeImagePath = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $relativeImagePath = '/' . $newImageName;
        }

        // Create a new Admin record and set the 'image' field to the path
        $adminPackage->image = $relativeImagePath;
        $packageId = $adminPackage->id;
        $adminPackage->save();


        return redirect()->route('admin_package.index', ['adminPackage' => $packageId])->with('success', 'Package created successfully');
    }

    public function edit(Package $adminPackage)
    {

        $categories = Category::all();

        return view('admin/admin_package_edit', compact('adminPackage', 'categories'));
    }

    public function update(Request $request, Package $adminPackage)
    {

        $request->validate([
            'name' => 'required|max:80',
            'category_id' => 'required|exists:categories,id',
            'price' => 'required|numeric|min:0',
            'number_of_person' => 'required|integer|min:1',
            'description' => 'nullable|string|max:250',
        ]);

        $adminPackage->update($request->all());

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $adminPackage->image = '/' . $newImageName;
        }

        $adminPackage->update($request->except('image'));

        return redirect(route('admin_package.index'))->with('success', 'Package updated successfully.');
    }



    public function destroy($id)
    {
        $adminPackage = Package::find($id);
        $adminPackage->delete();
        return redirect()->route('admin_package.index', ['adminPackage' => $id])->with('success', 'Package deleted successfully');
    }
}
