# FrontendShoppingCartChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

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

## Design decisions

* Assumptions:
    * Enums
    * 0 quantity products are possible
    * Discounts enum to handle possible various discounts 
    for the same product. To come from API
    
* Component breakdown
    * Feature components -> Shopping cart
* Commit convention
* Generic components and why
    * cabify-grid
* Specific components and why
* Project directory structure and why
    * Future structure if the app grows
* Cross component communication
    * Services for feature components
    * Event/property binding for presentational components
* Future improvements
    * Nrgx
    * i18n system with json files with strings
    * Make generic components more configurable
    * Validation for more than one config for cabify-span
    * Create discount model/service
* Stiling:
    * Explain the differences in flex usage
    * cabify-grid
* Known issues
    * Pixel differences
