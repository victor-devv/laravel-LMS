@extends('admin.templates.main')

@section('header')
User Management
@endsection

@section('content')
<h3 class="display-3">User Information</h3>
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
            <div class="card-body">
                <h6 class="card-category text-gray">{{ $user->first_name }} Role</h4>
                    <p class="card-description">
                </h6>
                <h4 class="card-title">{{ $user->first_name }} {{ $user->last_name }}</h4>

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
                    <a href="javascript:;" class="btn btn-info btn-round">Edit</a>
                    <a href="javascript:;" class="btn btn-delete btn-round">Delete</a>

            </div>
        </div>
    </div>
</div>
@endsection