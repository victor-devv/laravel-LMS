<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\Mentee;
use App\Models\Mentor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Fortify\CreateNewUser;
use App\Http\Requests\Admin\MenteeRequest;

class MenteeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'auth.isAdmin']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mentees = Mentee::paginate(10);
        // dd($users);

        return view('admin.mentees.index')->with(
            [
                'users' => $mentees
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.mentees.create', [
            'roles' => Role::all(),
            'mentors' => Mentor::all(),
            'mentees' => Mentee::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MenteeRequest $request)
    {
        $role = '4';

        $newUser = new CreateNewUser();

        $user = $newUser->create(array_merge($request->only('first-name', 'last-name', 'email', 'password', 'password_confirmation'), ['msisdn' => null]));

        $mentee = Mentee::create([
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'user_id' => $user->id,
            'mentor_id' => $request['mentor']
        ]);


        $user->roles()->sync($request->roles);

        session()->flash('success', 'Mentee Created Successfully!');

        return redirect(route('admin.mentees.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Approve mentee to access resources post payment.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function approve($id)
    {
        $mentee = Mentee::findorFail($id);

        if ($mentee->amount_paid < 45000.00) {
            session()->flash('failure', 'Approval Failed! Invalid Payment.');
            return redirect()->back();
        }
        $mentee->update(['approval_status' => true]);
        $mentee->save();

        return redirect(route('admin.mentees.index'));
    }
}
