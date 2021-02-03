@extends('admin.templates.main')

@section('header')
Mentee Management
@endsection

@section('content')

<div class="row">
    <div class="col-12">
        <h1 class="float-left"></h1>
        <a href="{{ route('admin.mentees.create') }}" class="btn btn-sm btn-success float-right" role="button">Add Mentee</a>

    </div>
</div>
@include('partials.alerts')
<div class="row">
    <div class="col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">Mentees</h4>
                <p class="card-category">View and Approve Mentees</p>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover w-auto">
                    <thead class="text-primary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">MSISDN</th>
                            <th scope="col" class="text-center">Email</th>
                            <th scope="col" class="text-center">Payment Status</th>
                            <th scope="col" class="text-center">Approval Status</th>
                            <th scope="col" class="text-center">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        @foreach($users as $user)
                        <tr>
                            <th scope="row">{{ $user->id }}</th>
                            <td>{{ $user->first_name }}</td>
                            <td>{{ $user->last_name }}</td>
                            <td>{{ $user->msisdn }}</td>
                            <td class="text-center">{{ $user->email }}</td>
                            <td class="text-center">{{ $user->payment_status }}</td>
                            <td class="text-center">
                                @if($user->approval_status)
                                Approved
                                @else
                                Not approved
                                <form action="{{ route('admin.mentee.approve', $user->id) }}" method="POST" id="deleteUserForm{{ $user->id }}" class="align-self-center mx-1" style="display: inline;">
                                    @csrf
                                    @method('PATCH')

                                    <button type="submit" class="btn btn-success btn-sm align-self-end"><i class="material-icons">check_box</i> Approve</button>
                                </form>
                                @endif
                            </td>
                            <td class="text-center">
                                <a href="{{ route('admin.mentees.edit', $user->id) }}" class="btn btn-sm btn-warning align-self-center mx-auto" role="button"><i class="material-icons">edit</i> Edit</a>
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