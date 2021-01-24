<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('logged-in', function($user) {
            return $user;
        });

        Gate::define('is-admin', function($user) {
            // return $user->hasAnyRole('S.Admin');
            return $user->hasAnyRoles(['S.Admin', 'Admin']);
        });

        Gate::define('is-mentor', function ($user) {
            return $user->isMentor($user->id);
        });

        Gate::define('is-mentee', function ($user) {
            return $user->isMentee($user->id);
        });

        Gate::define('has-mentor', function ($user) {
            return $user->hasMentor();
        });

    }
}
