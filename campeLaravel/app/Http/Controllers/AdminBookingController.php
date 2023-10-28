<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\User;
use Illuminate\Http\Request;

class AdminBookingController extends Controller
{
    public function index()
    {

        $adminCategories = Category::all();
        $adminUser = User::all();
        $adminBooking = Booking::all();
        $adminPackage = Package::all();
        return view('admin/admin_booking', compact('adminCategories', 'adminUser', 'adminPackage', 'adminBooking'));



    }

    public function create()
    {


        return view('admin/admin_booking_create ');
    }




    public function store(Request $request)
    {

        $adminBooking = Booking::create($request->all());
        $bookingId = $adminBooking->id;
        $adminBooking->save();


        return redirect()->route('admin_user.index', ['adminBooking' => $bookingId])->with('success', 'Booking created successfully');
    }

    public function edit(Booking $adminBooking)
    {



        return view('admin/admin_booking_edit', compact('adminBooking'));
    }

    public function update(Request $request, Booking $adminBooking)
    {

        $adminBooking->update($request->all());



        return redirect(route('admin_booking.index'))->with('success', 'Booking updated successfully.');
    }



    public function destroy($id)
    {
        $adminBooking = Booking::find($id);
        $adminBooking->delete();
        return redirect()->route('admin_booking.index', ['adminBooking' => $id])->with('success', 'Booking deleted successfully');
    }
}
