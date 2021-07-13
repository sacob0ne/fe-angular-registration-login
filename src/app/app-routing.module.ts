// The app routing module defines the top level routes for the angular application 
// and generates a root routing module by passing the array of routes to the 
// RouterModule.forRoot() method. The module is imported into the main app module below.

// The home route maps the root path of the app to the home component, the users route 
// maps to the users module and the account route maps to the account module, both feature 
// module routes (/users and /account) are lazy loaded. The home and users routes are 
// secured by passing the auth guard to the canActivate property of each route.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }