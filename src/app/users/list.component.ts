// The users list component gets all users from the account service in the ngOnInit() 
// method and makes them available to the users list template via the users property.

// The deleteUser() method first sets the property user.isDeleting = true so the 
// template displays a spinner on the delete button, it then calls this.accountService.delete() 
// to delete the user and removes the deleted user from component users array so it is 
// removed from the UI.

import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id) 
            });
    }
}