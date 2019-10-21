# VerivoxFrontendTask

To run a project first run in the console `npm init`, then start development server with `ng serve`. The app is available at `http://localhost:4200/`.

To run the tests please execute `ng test`.

To run linter execute `ng linter`.

To build in a product mode `ng build --prod`.

You can find this project in a GitHub repository navigating to `https://github.com/NGolovina/verivox-frontend-task`

# Some comments

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2. 

Angular material components were used in a project for a table, sorting and buttons.

For a CSS naming convention - BEM was used.

Adaptive design was implemented via media queries, the task was not so complex to use Angular Flex or any 
other grid system.

Because of a lack of time I did not use Angular material theme, and also the application in browser does not look 100% 
similar like the mocks in the task. SCSS styles can be optimized, such things like icomoon icons can be extracted in a 
project or for a global use; SCSS classes can be splitted and organized vor example via SMACCS.  

Tests are not complete, for example the tests for sorting for Tariff List component, E2E tests need to be written.
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
