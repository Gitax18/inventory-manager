# Inventory management application
### A Project from **[BLUELEARN](https://www.bluelearn.in/)**

Build an Inventory management application for an imaginary store which must have 'categories' and 'items'.
A User can select an category and all the items from that category will become visible in the view.
A Admin can create new product, or edit or delete them.

## Project Architecture
I am Not creating seperate folder for each type of file as it will make the project more complex, and it is not neccessary for this kind of small projects.

- **controller.js** : This file will contains all the business logic for each route/page.
- **routes.js** : This file contains code that handles routes.
- **app.js** : Main server file.
- **model.js** : This file contains schema of the data for database,
- **database.js** : This file holds code for making sequelize enviroment connection to database.
- **views/** : This folder holds files that will render at client side.
- **public/** : This folder holds resources to render views files.

## Installation
1. First fork this repo and then clone it to your local machine.
   ```bash
   git clone https://github.com/Gitax18/inventory-manager.git
   ``` 
2. After cloning change your current directory to project directory
   ```bash
    cd inventory-manager
   ```
3. Now install all the dependencies of the project. (**nodeJS must be installed**)
   ```bash
   npm install
   ```
4. After installing the dependencies create a .env file.
   ```bash
   touch .env
   ```
   and Now write your database details in .env by following given template:
   ```json
   # port details
   port=3000

   # database details
   DB_PASS="<your-database-password>"
   DB_USERNAME="<your-database-username>"
   DB_NAME="inventory_manager"
   ```
    you can copy paste this template to your .env file but remember to replace password and username placeholder.

5. Now your setup is complete and you can start your server by using following command.
   ```bash
   npm start
   ```