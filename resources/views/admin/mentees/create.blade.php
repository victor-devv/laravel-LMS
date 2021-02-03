@extends('admin.templates.main')
@section('header')
Mentee Management
@endsection

@section('css')

<!-- MULTI SELECT TOOL -SELECT2 -->
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
@endsection

@section('content')
<h2>Add Mentee</h2>
<div class="card authform">
    <div class="card-body">
        @include('partials.alerts')
        <form method="POST" action="{{ route('admin.mentees.store') }}" class="m-4">
            @include('admin.mentees.partials.form')
        </form>
    </div>
</div>
@endsection

@section('scripts')
<!-- MULTI SELECT TOOL -SELECT2 -->
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>

<script>
    $(document).ready(() => {
        // $(".roles-selector").select2({
        //     tags: true
        // });

        // $('#role4').click(function() {
        //     console.log('a');
        //     if ($("#roles option[value=4]:selected").length > 0) {
        //         console.log('b');

        //         $('#mentorSection').attr('hidden', false);

        //     } else {

        //         $('#mentorSection').attr('hidden', true);

        //     }
        // });

        // $('#roles').on('change', function() {
        //     let selectObject = $('#roles').select2('data');

        //     let found = false;

        //     if (selectObject === undefined || selectObject.length == 0) {
        //         $('#mentorSection').attr('hidden', true);
        //     }

        //     for (var i = 0; i < selectObject.length; i++) {
        //         if (selectObject[i].text == 'Student') {
        //             found = true;
        //             $('#mentorSection').attr('hidden', false);
        //             break;
        //         } else {
        //             $('#mentorSection').attr('hidden', true);
        //         }
        //     }


        // });
        let val = $("#roles").val();

        if (val == '4') {
            $('#mentorSection').attr('hidden', false);
        } else {
            $('#mentorSection').attr('hidden', true);
        }

        $("#roles").change(function() {
            var val = $(this).val();

            if (val == '4') {
                $('#mentorSection').attr('hidden', false);
            } else {
                $('#mentorSection').attr('hidden', true);
            }

        });
    });
</script>
@endsection