// The users routing module defines the routes for the users feature module. 
// It includes routes for listing, adding and editing users, and a parent route 
// for the layout component which contains the common layout code for the users section.

// The add and edit routes are different but both load the same component 
// (AddEditComponent) which modifies its behaviour based on the route.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: AddEditComponent },
            { path: 'edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }