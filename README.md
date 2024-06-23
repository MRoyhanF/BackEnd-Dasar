Mentahan Authentication

// Create a User
POST http://localhost:5000/users
Content-Type: application/json
{
    "name" : "MRoyhan",
    "email" : "admin@gmail.com",
    "password" : "123456",
    "confPassword" : "123456",
    "role" : "admin"
}

###
//get All Users
GET http://localhost:5000/users

###
//Get Single User
GET http://localhost:5000/users/5b891348-7c29-4fdb-956d-dc6491f3e095

###
//update data
GET http://localhost:5000/users/88efc39c-4935-4b69-b176-23eb70a83381
Content-Type: application/json
{    
    "name" : "RoyhanUpdated",
    "email" : "admin001@gmail.com",
    "password" : "",
    "confPassword" : "",
    "role" : "user"
}

###
//delete data
DELETE http://localhost:5000/users/88efc39c-4935-4b69-b176-23eb70a83381

###
// Login User
POST http://localhost:5000/login
Content-Type: application/json
{
    "email" : "joko@gmail.com",
    "password" : "123456"
}

###
// Me
GET  http://localhost:5000/me

###
// logout
DELETE  http://localhost:5000/logout

###
//get All Products
GET http://localhost:5000/products

###
//get Single Products
GET http://localhost:5000/product/0d26919b-75b7-4d55-9fdf-0432fc65c55a

###
// POST Data Product
POST http://localhost:5000/product
Content-Type: application/json
{
    "name" : "Product 1",
    "price" : 997
}

###
// Update Product
PATCH http://localhost:5000/product/0d26919b-75b7-4d55-9fdf-0432fc65c55a
Content-Type: application/json
{
    "name" : "Product Updated",
    "price" : 15000
}

###
// Delete Product
DELETE  http://localhost:5000/product/0d26919b-75b7-4d55-9fdf-0432fc65c55a

# BackEnd
