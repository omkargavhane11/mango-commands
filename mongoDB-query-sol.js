// 1. Find all the information about each products
db.product.find({})

// 2. Find the product price which are between 400 to 800
db.product.find({ product_price: { $gt: 400, $lt: 800 } })

//3. Find the product price which are not between 400 to 600
//  use of "$not" operator
db.product.find({ product_price: { $not: { $gt: 400, $lt: 600 } } })

//4. List the four product which are greater than 500 in price
// use of "limit()"
db.product.find({ product_price: { $gt: 500 } }).limit(4)

// 5. Find the product name and product material of each products
// inclusion projection used 
db.product.find({}, { product_name: 1, product_material: 1 })   // "1" for inclusion

// 6. Find the product with a row id of 10
db.product.find({ id: "10" })

// 7. Find only the product name and product material
// inclusion and exclusion projection used. "1" for inclusion and "0" for exclusion.
db.product.find({}, { _id: 0, product_name: 1, product_material: 1 })

// 8. Find all products which contain the value of soft in product material 
// here, "S" letter of "Soft" is case sensative. So write the same case word when writing a query. A small letter "s" for "soft" wont give the expected output.
db.product.find({ product_material: "Soft" }).pretty();

// 9. Find products which contain product color indigo  and product price 492.00
db.product.find({ $or: [{ product_color: "indigo" }, { product_price: 492.00 }] }) 

// 10. Delete the products which product price value are same





db.product.find({ product_color: "indigo" }).pretty();  //10 ✅
db.product.find({ product_price: 492.00 }).pretty();  //10 ✅


db.product.aggregate([{$group:{"_id":"$product_price","product_price":{$first:"$product_price"},"count":{$sum:1}}},{$match:{"count":{$gt:1}}},{$project:{"name":1,"_id":0}},{$group:{"_id":null,"duplicateNames":{$push:"$product_price"}}},{$project:{"_id":0,"duplicateNames":1}}])


