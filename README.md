# MERN E-Commerce App - ProShop

This is an E-Commerce project based on [Brad Traversy's MERN eCommerce From Scratch.](https://www.udemy.com/course/mern-ecommerce/) Like a typical E-commerce app, ProShop allows authenticated users to view and order products. It facilates payments using PayPal api and users can also view their order status. It also boasts a fully functional admin panel to add and edit products and users. The application is deployed on Heruko and can be visited by clicking [here.](https://proshop-project1-dikshant.herokuapp.com/)

# Features
* Full featured shopping cart
* Product reviews and ratings
* Top products carousel
* Product pagination
* Product search feature
* User profile with orders
* Admin product management
* Admin user management
* Admin Order details page
* Mark orders as delivered option
* Checkout process (shipping, payment method, etc)
* PayPal / credit card integration
* Database seeder (products & users)

# Preview

<img src="/ReadMe_Assets/HomePage_ProShop.JPG" alt = "HomeScreen" width="500"/>

<img src="/ReadMe_Assets/ProductScreen_ProShop.JPG" alt = "ProductDetailsScreen" width="500"/>

<img src="/ReadMe_Assets/CartScreen_ProShop.JPG" alt = "CartScreen" width="500"/>

<img src="/ReadMe_Assets/OrderDetailsScreen_ProShop.JPG" alt = "OrderDetailsScreen" width="500"/>

<img src="/ReadMe_Assets/OrderListScreen_ProShop.JPG" alt = "OrderListScreen" width="500"/>

<img src="/ReadMe_Assets/AdminProducts_ProShop.JPG" alt = "AllProductsScreen" width="500"/>

<img src="/ReadMe_Assets/EditProduct_ProShop.JPG" alt = "EditProductScreen" width="500"/>

# Softwares used
MongoDb, Express, ReactJs, NodeJs, Redux, Axios, JWT, Bootstrap, Paypal payment gateway, Bcrypt, Helmet

# Usage
## Add Env Variables
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```
## Install Dependencies
```
npm install
cd frontend
npm install
```
## Run on your local machine

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build and Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
There is no need to create a build folder in client, because a Heroku post build script is already present in the project

# To Get Sample Data for Project
```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

# Sample Users
|Name|Email|Password|
|----|-----|--------|
|Admin User|admin@example.com|123456|
|John Doe|john@example.com|123456|
|Jane Doe|jane@example.com|123456|

# Acknowledgment
* Creator of the course: Brad Traversy
* Github: [@bradtraversy](https://github.com/bradtraversy)
* Website: [traversy-media](http://traversymedia.com/)

