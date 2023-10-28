<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\Product;
use App\Models\User;

use Illuminate\Http\Request;

class AdminProductController extends Controller
{
    public function index()
    {
        $adminProducts = Product::all();
        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();

        return view('admin/admin_product', compact('adminProducts', 'adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));
    }

    public function create()
    {
        $Packages = Package::all();

        return view('admin/admin_product_create ', compact('Packages'));
    }




    public function store(Request $request)
    {


        $request->validate([
            'name' => 'required|max:80',
            'package_id' => 'required|exists:packages,id',
        ]);

        $adminProducts = Product::create($request->all());
        $relativeImagePath = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $relativeImagePath = '/' . $newImageName;
        }


        $adminProducts->image = $relativeImagePath;

        $productId = $adminProducts->id;
        $adminProducts->save();


        return redirect()->route('admin_product.index', ['adminProducts' => $productId])->with('success', 'Product created successfully');
    }

    public function edit(Product $adminProduct)
    {
        $Packages = Package::all();
        return view('admin/admin_product_edit', compact('adminProduct', 'Packages'));
    }


    public function update(Request $request, Product $adminProduct)
    {

        $request->validate([
            'name' => 'required|max:80',
            'package_id' => 'required|exists:packages,id',
        ]);

        $adminProduct->update($request->all());

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $newImageName = uniqid() . '-' . $image->getClientOriginalName();
            $image->move(public_path('photo'), $newImageName);
            $adminProduct->image = '/' . $newImageName;
        }

        $adminProduct->update($request->except('image'));

        return redirect()->route('admin_product.index')->with('success', 'Product updated successfully.');
    }




    public function destroy($id)
    {
        $adminProducts = Product::find($id);
        $adminProducts->delete();
        return redirect()->route('admin_product.index', ['adminProducts' => $id])->with('success', 'Product deleted successfully');
    }
}
