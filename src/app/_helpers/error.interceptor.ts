// The Error Interceptor intercepts http responses from the api to check if there were any errors. 
// If there is a 401 Unauthorized response the user is automatically logged out of the application, 
// all other errors are re-thrown up to the calling service so an alert with the error can be 
// displayed on the screen.

// It's implemented using the Angular HttpInterceptor interface included in the HttpClientModule, 
// by implementing the HttpInterceptor interface you can create a custom interceptor to catch all 
// error responses from the server in a single location.

// Http interceptors are added to the request pipeline in the providers section of the app.module.ts file.

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.accountService.logout();
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}