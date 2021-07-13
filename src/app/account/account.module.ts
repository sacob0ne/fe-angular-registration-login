// The account module defines the feature module for the account section 
// along with metadata about the module. The imports specify which other 
// angular modules are required by this module, and the declarations state 
// which components belong to this module. For more info about angular 9 modules 
// see https://angular.io/docs/ts/latest/guide/ngmodule.html.

// The account module is hooked into the main app inside the app routing 
// module with lazy loading.

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AccountModule { }