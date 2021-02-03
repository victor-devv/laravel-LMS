<?php

namespace App\Models;

use App\Models\Mentor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Mentee extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'user_id',
        'mentor_id',
        'payment_status',
        'amount_paid',
        'approval_status'
    ];

    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
