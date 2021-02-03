@extends('admin.templates.main')

@section('header')
User Management
@endsection

@section('content')
{{--dd($mentor)--}}

<h3 class="display-4 mt-0" style="color: teal;">User Information</h3>
<hr>
<br>
<div class=" h-100 d-flex justify-content-center align-items-center">
    <div class="col-md-6 m-6">
        <div class="card card-profile">
            <div class="card-avatar">
                <a href="javascript:;">
                    <img class="img" src="../assets/img/faces/marc.jpg" />
                </a>
            </div>
            <div class="card-body p-4">
            <h4 class="card-title mt-5">{{ $user->first_name }} {{ $user->last_name }}</h4>

                <h6 class="card-category text-gray">{{ $user->first_name }} Role</h4>
                    <p class="card-description">
                </h6>

                <p class="card-description mt-2"><span>Email: </span>{{ $user->email }}</h4>
                <p class="card-description mt-2"><span>Phone Number: </span>{{ $user->msisdn }}</h4>

                            @if($user->isMentee($user->id))
                <p class="card-description"><span>Mentor: </span>{{ $mentor->first_name }} {{ $mentor->last_name }}</h4>
                    @elseif($user->isMentor($user->id))
                <p class="card-description"><span>Mentees: </span></h4>
                    @if(isset($mentees))
                <ul>
                    @foreach($mentees as $mentee)
                    <li>{{ $mentee->first_name }} {{ $mentee->last_name }}</li>
                    @endforeach
                </ul>
                @else
                <p class="card-description">No mentee assigned to user</h4>
                    @endif
                    @endif
                <div class="row">
                    <div class="col-md-6 text-center mx-auto mt-3 mb-2">
                        <a href="{{ route('admin.users.edit', $user->id) }}" class="btn btn-info btn-round mx-2">Edit</a>
                        <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" id="deleteUserForm{{ $user->id }}" class="mx-2" style="display: inline;">
                            @csrf
                            @method('DELETE')

                            <button type="submit" class="btn btn-danger btn-round">Delete</button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
@endsection