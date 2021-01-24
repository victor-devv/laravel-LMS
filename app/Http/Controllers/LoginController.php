<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class LoginController extends Controller
{
    public function authenticate(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            if (Gate::allows('is-admin')) {
                return redirect(config('fortify.admin-dashboard'));
            } else if (Gate::allows('is-mentor')) {
                return redirect(config('fortify.teacher-dashboard'));
            }
        }
        return redirect('login');
    }
}
