@extends('layout.admin_master')


@section('title', 'Categories')


@section('content')



    <!-- Main Content -->
    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Dashboard</h1>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="card card-statistic-1">
                        <div class="card-icon bg-primary">
                            <i class="far fa-user"></i>
                        </div>
                        <div class="card-wrap">
                            <div class="card-header">
                                @php
                                    $userCount = count($adminUser);
                                    $adminCategoriesCount = count($adminCategories);
                                    $adminPackageCount = count($adminPackage);
                                    $adminBookingCount = count($adminBooking);
                                @endphp

                                <h4>Total user </h4>
                            </div>
                            <div class="card-body">
                                {{ $userCount }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="card card-statistic-1">
                        <div class="card-icon bg-danger">
                            <i class="far fa-newspaper"></i>
                        </div>
                        <div class="card-wrap">
                            <div class="card-header">
                                <h4>Total category </h4>
                            </div>
                            <div class="card-body">
                                {{ $adminCategoriesCount }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="card card-statistic-1">
                        <div class="card-icon bg-warning">
                            <i class="far fa-file"></i>
                        </div>
                        <div class="card-wrap">
                            <div class="card-header">
                                <h4>Total Package</h4>

                            </div>
                            <div class="card-body">
                                {{ $adminPackageCount }}

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="card card-statistic-1">
                        <div class="card-icon bg-success">
                            <i class="fas fa-circle"></i>
                        </div>
                        <div class="card-wrap">
                            <div class="card-header">
                                <h4>Total Booking</h4>

                            </div>
                            <div class="card-body">
                                {{ $adminBookingCount }}

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="row">

                <div class="col-lg-12 col-md-12 col-12 col-sm-12">
                    @if (session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif
                    <div class="card">
                        <div class="card-header d-flex justify-content-between m-2">

                            <h4>Categories</h4>

                            <div class="ml-auto ">
                                <a href="{{ route('admin_categories.create') }}"
                                    class="btn btn-primary btn-action  pr-4 pl-4 pt-2 pb-2 " data-toggle="tooltip"
                                    title="Edit"><i class="fas fa-solid fa-plus"></i></a>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th>image</th>
                                            <th>Title</th>
                                            <th>description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($adminCategories as $category)
                                            <tr>
                                                <td>
                                                    <img src=" {{ asset('photo' . $category->image) }}"
                                                        alt="{{ $category->name }}" width="60px" height="60px">
                                                </td>

                                                <td>{{ $category->name }}</td>

                                                <td>{{ $category->description }}</td>

                                                <td class="d-flex flex-row align-items-center ">

                                                    <form
                                                        action="{{ route('admin_categories.edit', ['admin_category' => $category->id]) }}"
                                                        method="GET">
                                                        @csrf
                                                        <button style="border:none; outline:none;">
                                                            <a class="btn btn-primary btn-action mr-1">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </a>
                                                        </button>
                                                    </form>


                                                    <form
                                                        action="{{ route('admin_categories.destroy', ['admin_category' => $category->id]) }}"
                                                        method="POST">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" style="border:none; outline:none; "
                                                            data-toggle="tooltip" title="Delete"
                                                            onclick="return confirm('Are You Sure? This action cannot be undone. Do you want to continue?')">
                                                            <a class="btn btn-danger btn-action mr-1">
                                                                <i class="fas fa-trash"></i>
                                                            </a>
                                                        </button>
                                                    </form>


                                                </td>
                                            </tr>
                                        @endforeach



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

@endsection
