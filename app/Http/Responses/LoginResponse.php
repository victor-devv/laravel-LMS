<?php

namespace App\Http\Responses;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Response;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{

    /**
     * @param  $request
     * @return mixed
     */
    public function toResponse($request)
    {
        // replace this with your own code
        // the user can be located with Auth facade

        // $home = Auth::user()->is_admin ? config('fortify.dashboard') : config('fortify.home');

        if (Gate::allows('is-admin')) {
            $home = config('fortify.admin-dashboard');
        } else if (Gate::allows('is-mentor')) {
            $home = config('fortify.teacher-dashboard');
        }

        // return $request->wantsJson()
        //     ? response()->json(['two_factor' => false])
        //     : redirect($home);

        return $request->wantsJson()
            ? new Response('', 201)
            : redirect($home);
    }
}
