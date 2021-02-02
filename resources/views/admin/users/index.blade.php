@extends('admin.templates.main')

@section('header')
User Management
@endsection

@section('content')

<div class="row">
    <div class="col-12">
        <!-- User Management -->
        <h1 class="float-left"></h1>
        <a href="{{ route('admin.users.create') }}" class="btn btn-sm btn-success float-right" role="button">Add User</a>

    </div>
</div>
@include('partials.alerts')
<div class="row">
    <div class="col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">Users</h4>
                <p class="card-category">View, Edit or Delete all users</p>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover w-auto">
                    <thead class="text-primary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">MSISDN</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($users as $user)
                        <tr>
                            <th scope="row">{{ $user->id }}</th>
                            <td>{{ $user->first_name }}</td>
                            <td>{{ $user->last_name }}</td>
                            <td>{{ $user->msisdn }}</td>
                            <td>{{ $user->email }}</td>
                            <td scope="row" class="">
                                <div class="d-flex">
                                    <a href="{{ route('admin.users.show', $user->id) }}" class="btn btn-sm btn-info align-self-start mr-auto" role="button">View</a>
                                    
                                    <a href="{{ route('admin.users.edit', $user->id) }}" class="btn btn-sm btn-warning align-self-center mx-auto" role="button">Edit</a>
                                    
                                    <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" id="deleteUserForm{{ $user->id }}" class="float-right ml-auto" style="display: inline;">
                                            @csrf
                                            @method('DELETE')

                                            <button type="submit" class="btn btn-danger btn-sm align-self-end">Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $users->links() }}

            </div>
        </div>

    </div>
</div>
@endsection