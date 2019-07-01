# FrontendShoppingCartChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

# Overview
This application has been created as solution for the problem proposed by Cabify as technical test. The chosen framework is Angular. The choice (over React as main competitor) is due to the ease of fulfilling the requirements for this task that the framework provides.

The original repository and its resources have been used in the application, following the framework established structure.

# Assumptions
Some assumptions have been made to carry out the project, in order to follow a certain flow and patterns:
* The pricing rules are considered to be business information provided to the application. For this purpose, some ```enums``` have been created in the ```app/shared/enums``` folder, namely the discounts, and the information about products.
* In the shopping cart, it is assumed that quantity 0 is possible at the current time, and given the task requirements. This is a "Product Owner decision", to improve in future iterations.

# Project folder structure
## Directory structure
## Scalability
Add links
# Componentization
## Generic components and feature components
## Component breakdown

# Application flow and design
## Models  
## Cross-component communication
## Service

# Future iterations/improvements

# Known issues


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
    * Discounts enum to handle possible various discounts 
    for the same product. To come from API
    * Improve grid
* Stiling:
    * Explain the differences in flex usage
    * cabify-grid
* Known issues
    * Pixel differences
    * Modal style
    * Summary total discounted forgotten
