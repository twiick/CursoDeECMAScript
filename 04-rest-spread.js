// Array destructuring
let fruits=["Apple","Banana"];
let [a,b]=fruits;
console.log(a);

// Object destructuring
let user={
    username: "Oscar",
    age: 25,
    country: "Italia"
}
let {age,country}=user;
console.log(age,country)

// Spread operator
let person={
    name:"Diego", age:32
};
let country2="Mexico";
let data={id:1, ...person, country2};
console.log(data);

// Rest
function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return(num+values[0])
}
sum(55,23,3,435,4,2,23);