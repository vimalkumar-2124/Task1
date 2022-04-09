// 1.How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };
const _ = require('lodash');
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

//Lodash isEqual() method is the best way to compare two JSON object.
console.log(_.isEqual(obj1,obj2))
