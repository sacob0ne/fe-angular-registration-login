// The app component is the root component of the application, it defines 
// the root tag of the app as <app></app> with the selector property of 
// the @Component() decorator.

// It subscribes to the user observable of the account service so it can 
// reactively show/hide the main navigation bar when the user logs in/out 
// of the application. I didn't worry about unsubscribing from the observable
// here because it's the root component of the application and will only 
// be destroyed when the angular app is closed.

// The logout() method is called from the logout link in the main nav bar 
// above to log the user out and redirect them to the login page.

import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}