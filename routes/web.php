<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\MenteeController;
use App\Http\Controllers\Mentor\MentorController;
use App\Http\Controllers\Admin\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

Route::post('authenticate', [LoginController::class, 'authenticate'])->name('authenticate');

// Admin Routes
//
Route::middleware(['auth', 'auth.isAdmin'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('/users', UserController::class);
    Route::resource('/mentees', MenteeController::class);
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::patch('/approve-mentee/{mentee_id}', [MenteeController::class, 'approve'])->name('mentee.approve');

});

// Mentor/Teacher Routes
Route::middleware(['auth', 'auth.isMentor'])->prefix('teacher')->name('teacher.')->group(function () {
    Route::resource('/users', MentorController::class);
    Route::get('/dashboard', [MentorController::class, 'index'])->name('dashboard');
});
