﻿// The auth guard is an angular route guard that's used to prevent unauthenticated users 
// from accessing restricted routes, it does this by implementing the CanActivate interface 
// which allows the guard to decide if a route can be activated with the canActivate() method. 
// If the method returns true the route is activated (allowed to proceed), otherwise if the 
// method returns false the route is blocked.

// The auth guard uses the account service to check if the user is logged in, if they are logged 
// in it returns true from the canActivate() method, otherwise it returns false and redirects 
// the user to the login page along with the returnUrl in the query parameters.

// Angular route guards are attached to routes in the router config, this auth guard is used 
// in app-routing.module.ts to protect the home page route.

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}