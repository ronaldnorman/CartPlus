Author: Ronald Norman
Date: October 5, 2018

Solution Overview:
-----------------------
This is sample source code demonstrating the creation of an Single Page Application store and shopping cart totally in React-Redux with ASP.NET CORE MVC API.

Quality Attributes (Non-Functional Features):
---------------------------------------------
1. Themed. Consistent theme through out, easy to change, and with barely any inline manual styling. 
2. Responsive. Looks good on mobile and desktop.
3. Browser support. Looks good and supports all major browsers.
4. Structured layers and seperation of concerns. The architecture is clear and easy to extend and maintain. The UI (ClientApp) layer is seperate from the application layer (Controllers), seperate from the models.
5. Technology. Uses a cutting-edge technology stack. React, Redux, React Bootstrap, ASP.NET Core, MVC API
6. Support for future async calls to more apis, at every action
7. High maintainability. All variables are well named
8. Cloud-hosted. I deployed and hosted this solution on Microsoft Azure to demonstrate ease of publishing, and to enhance availability and scalability.

Functionality:
--------------
1. Allows the user to browser products as they are displayed on the main page
2. Dynamic search. The product catalog filters as the user types in the search box.
3. Adding product items to the cart without duplication.
4. Removing product items from the cart very easily and recalculates dynamically
5. Calculating totals, i.e., subtotals, tax, and totals 
6. Cart full submission functionality (no database though)
7. User can continue shopping from the cart page for convenience
8. Lighting fast responsiveness 

Known Issues / Improvements for Future Versions:
-----------------------------------------------
1. I used sample data for quick demo purposes, no database. Although the cart gets fully submitted to the store API, no saving or loading from a database was implemented
2. It would be nice to have displayed the number of items in the shopping cart as a fancy little label 
3. No support for quantity in this version. All item have one for quantity by default.
