// The account layout component is the root component of the account 
// feature / section of the app, it binds the component to the account 
// layout template with the templateUrl property of the angular @Component 
// decorator, and automatically redirects the user to the home page 
// if they are already logged in.

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
}