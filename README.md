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
The project has been organized in a way that can easily be scaled, grouping componentes and other code files by features. This way, the application can easily grow by features, not having to add or modify files across the project but in the specific feature directory. Hence, scalability is much easier.
The application directory ```app``` is distributed as following:
* ```modules/```: this directory holds the features of the application. In this case, the shopping cart. This feature components (see  *Componentization*). If a specific feature is added or modified, this is the directory to go to.
Inside a feature directory, the specific components only used in it are also hosted, along with services, directives or other entities tied to the feature.
* ```shared/```: here live all code entities that are transversal to the application, such us generic components, models, services... 

# Componentization
The categorization of components has been done according to their utility accross the application.

## Generic components VS Feature components
* **Generic components** that can be used anywhere, are only presentational and can be configured because they are reactive to their properties, which represent their state. These are hosted in the ```shared/components``` folder.
* **Feature components**, that are closely related to business uses cases, and are too highly functional to be resued unless it's the same use case or very similar. They live under the ```modules/``` folder. This components may contain other components inside, that can be functional or transversal to the feature itself, along with specific services, models, etc, only related to the module/use case.

## Component breakdown
The list of components created from the design is as follows (also specified other related entities in italic):
* Feature components:
    * shopping-cart: This component holds no logic since it's though to be a pluggable feature component so it is portable.
        *  product-list
        *  order-summary
        *  product-detail (for the modal view)
        *  *shopping-cart-service (not a component, specific to the shopping-cart feature)*
* Generic components (cabify- prefix has been chosen to indicate transversality in naming):
    *  cabify-button: configurable with the text to use.
    *  cabify-grid: due to the presence of several grid-like structures in the design, a very simple grid system has been made.
    *  cabify-row: due to the presence of several rows in the design, with the same style, a component has been created to wich content to transclude/project can be passed.
    *  cabify-col: columns to use in the grid system, inside a row, with the styles defined by the design.
    *  cabify-header: represents the h1 components in the application, keeping the style by design and configurable with text.
    *  cabify-modal: this component is a container that can be displayed or hidden, an passed the content of the modal by the using component. It's been coded to be used in a declarative way, instead of imperatively.
    *  cabify-span: groups all the spans present in the design, with all the possible styles, and allows full configuration and passing of the string to show.

# Application flow
The application component loads the ```shopping-cart```, since this is the only feature. Inside, the ```product-list``` displays the list of products. On initialization, the component retrieves a ```Checkout``` instance (from the Checkout model). Once the information is displayed, when updating the amount of a certain product, the component logic makes use of the ```shopping-cart-service``` to update the Checkout information. This service has an observable that notifies the subscribers when the checkout status changes. This way, the ```order-summary``` gets the new data to display, reflecting the actions performed by the user.
The updating of the Checkout instance that the service created happens in the ```Checkout``` model, that holds the logic related to operations related to it.
Also, when the user clicks on the image of a product, the ```cabify-modal``` is used, and the ```product-detail``` is passed to it, to show a modal view with the details of a component. If the user clicks on "Checkout" (```cabify-button```), the service is used again to increment the amount of the chosen product.
This communication between generic components, transcluded components, and feature components is made via property and event binding.

## Models  
There are two models in the application:
* Product model, that represents a product of the application. This can be used not only for the shopping cart feature so it is place in the shared folder.
* Checkout model, that shapes all the information and related operations of a checkout. At the moment it is possible that it is used in other places, so temporarily it has been placed in the shared folder.

## Service
As mentioned before, the ```shopping-cart-service``` is used for two main purposes:
* Cross-component communication in the inner components of ```shopping-cart```.
* To provide access to the Checkout model from those same components, in a safe way. 

# Future iterations/improvements
* If the application grew, it might be worth considering using Nrgx for having a global store.
* i18n system with json files with strings for texts.
* Make generic components more configurable
* Validation to avoid non-permitted by design configurations in ```cabify-span```.
* Create discount model/service.
* Adapt discount data structure to allow several discounts for the same product/product-code. At the time this is uncertain and this business information should probably come from an API in a real life application.
* Improve grid system.

# Known issues
* Stiling:
    * Explain the differences in flex usage
    * cabify-grid
* Known issues
    * Pixel differences in designs due to the componentization.
    * Modal style has been adapted, but it is known that the style is not exactly the same. Due to time reasons I deemed more interesting to show how the component communication would work.
    * At the time of finishing this documentation, I realized that there's an error in the ```order-summary``` component, where the total discounted for every product is not calculated. At the current moment I cannot fix this issue, but I wanted to reflect the approach, that would be possibly having a ```AppliedDiscount``` model where this amount is calculated everytime a product quantity is modified.
