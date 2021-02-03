<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'auth.isAdmin']);
    }

    public function index()
    {
        if (Gate::denies('logged-in')) {
            dd('unauthorized');
        }

        return view('admin.dashboard.index');
    }
}
