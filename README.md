# GlassesShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

# Angular Client Application

The Angular Client Application is a full-stack project that connects to a Java Spring Framework server. It provides a user interface for registering orders and sending them to the server for processing.

## Routing Configuration

The routing in the Angular Client Application is configured using the `Routes` array. It defines the different routes available in the application and maps them to specific components.

### Route Definitions:

- **Path: ''**\
  Component: HomePageComponent\
  Description: This route represents the home page of the application. It is associated with the `HomePageComponent`, which displays the main content of the home page.

- **Path: 'cart'**\
  Component: CartComponent\
  Description: This route represents the shopping cart page of the application. It is associated with the `CartComponent`, which displays the items added to the cart.

- **Path: 'glasses'**\
  Component: GlassesPageComponent\
  Description: This route represents the glasses page of the application. It is associated with the `GlassesPageComponent`, which displays the available glasses for selection.

- **Path: 'glass/:id'**\
  Component: GlassComponent\
  Description: This route represents the individual glass page of the application. It is associated with the `GlassComponent`, which displays detailed information about a specific glass identified by the `id` parameter.

Please note that these route configurations enable navigation within the Angular Client Application, allowing users to move between different pages and access various functionalities.

If you have any further questions or require additional information, please feel free to reach out.
