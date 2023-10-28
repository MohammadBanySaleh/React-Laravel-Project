@extends('layout.admin_master')


@section('title', 'Edit Product')


@section('content')

    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h1>Edit Product</h1>
            </div>
            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form action="{{ route('admin_product.update', ['admin_product' => $adminProduct->id]) }}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')

                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ $adminProduct->name }}" required>
                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="package_id">Package</label>
                                        <select class="form-control @error('package_id') is-invalid @enderror" id="package_id" name="package_id">
                                            @foreach ($Packages as $package)
                                                <option value="{{ $package->id }}" {{ $adminProduct->package_id == $package->id ? 'selected' : '' }}>
                                                    {{ $package->name }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('package_id')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Image URL</label>
                                        <input type="file" class="form-control @error('image') is-invalid @enderror" id="image" name="image" value="{{ $adminProduct->image }}"required >
                                        @error('image')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="image">Current Image</label>
                                        <img src="{{ asset('photo/' . $adminProduct->image) }}" alt="{{ $adminProduct->name }}" width="70px" height="60px">
                                    </div>

                                    <button type="submit" class="btn btn-primary">Update Product</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

@endsection
