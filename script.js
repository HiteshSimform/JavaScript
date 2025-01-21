console.log("Hello")
// alert("Hello")

// Scope & Lexical Environment

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();
// console.log(b);

const i = 1;
console.log(i);



// 21-01-2025

// Chai aur Code - 
// Stack (In Primitive type it used) and Heap Memory ((In Non-Primitive type it used))

// String

const name = "hitesh";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation

// string declaration

const gameName = new String('hiteshj');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// for substring
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "          hitesh         ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20jethava";
console.log(url.replace('%20','-'));
console.log(url.includes("hj"));

const sp = "abc-def-ghi";
console.log(sp.split('-'));

// Number and Maths

const score = 400;
console.log(score);

const balance  = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// Maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));





console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)));

// Date and Time

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,23,5,3);
let myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone
}));

// Arrays in JavaScript

const myArr = [0,1,2,3,4,5 ]


// Objects

// singleton
// object literals

// Define and Use Symbol
const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh", 
    "full name":"Hitesh Jethava",
    [mySym]: "mykey1", // Symbol
    age:21,
    location: "Rajkot",
    email:"hitesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="hiteshjethava@gmail.com"
// Object.freeze(JsUser);
JsUser.email="hj@gmail.com";
// console.log(JsUser);

// with functions

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // `` string interpolation
}
// console.log(JsUser);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());


// const newUser = new Object();
const newUser = {}
newUser.id = "123abc";
newUser.name="Hitesh";
newUser.isLoggedIn = false;
console.log(newUser);

const regularUser = {
    email : "abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"jethava"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          