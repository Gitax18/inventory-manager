# Inventory management application
### A Project from **[BLUELEARN](https://www.bluelearn.in/)**

Build an Inventory management application for an imaginary store which must have 'categories' and 'items'.
A User can select an category and all the items from that category will become visible in the view.
A Admin can create new product, or edit or delete them.

## Project Architecture
- **controller.js** : This file will contains all the business logic for each route/page.
- **routes.js** : This file contains code that handles routes.
- **app.js** : Main server file.
- **model.js** : This file contains schema of the data for database,
- **database.js** : This file holds code for making sequelize enviroment connection to database.
- **views/** : This folder holds files that will render at client side.
- **public/** : This folder holds resources to render views files.
- **.env** : Stores enviroments variables like ports, database passwords or api keys and other secrets. **Must be created by user on his/her system.**
  