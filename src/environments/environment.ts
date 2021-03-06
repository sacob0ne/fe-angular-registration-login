// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// The development environment config contains variables required to run the application 
// in development.

// Environment config is accessed by importing the environment object into any Angular 
// service of component with the line import { environment } from '@environments/environment' 
// and accessing properties on the environment object, see the account service for an example.

export const environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
    // apiUrl: 'http://node-mongo-registration-login-api:4000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
