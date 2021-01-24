@extends('templates.main')

@section('content')

<div class="row">
    <div class="col-12">
        <h1 class="float-start">Mentees</h1>
    </div>
</div>
<div class="card">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">S/N</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
            </tr>
        </thead>
        <tbody>
            @foreach($mentees as $mentee)
            <tr>
                <th scope="row">{{$loop->iteration}}</th>
                <td>{{ $mentee->first_name }}</td>
                <td>{{ $mentee->last_name }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    {{ $mentees->links() }}
</div>



@endsection