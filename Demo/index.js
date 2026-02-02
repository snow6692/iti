//? js datatypes
//^ 1- primitive datatype [string , number , boolean , null , undefined (symbol,bigInt)]
//^ 2- object datatypes [string , number , boolean , array , math , date , event , error ]
var x = null;
var y;
var str1 = "abc"; //? literal creation [primitive datatype]
var str2 = new String("abc") //? ctor creation [object datatype]
console.log(typeof str1 , typeof str2 , str2.constructor.name , str1 ,str2.valueOf());
console.log(str1 === str2);
let arr1 = new Array() //? old
let arr2 = [] //? modern

//& var --> redecalaration + reInitialization
var namee = "ali";
var namee = 123;
console.log(namee);

//& let --> reinitialization
let num;
 num = 123;
 num = "123";

 //& const --> 
 const address="cairo";
// address=123

//* scope --> Accessibility of variable
//? [global "script" , local "function" , block , lexical "closure"]
{
  //~ var [function]
  var xx = 20;
  //~ block
  let yy = 100;
  console.log(yy);
}
console.log(xx);

//^ fun types
//? regular - fun expression - arrow function
//? Immediately Invoked Function Expression [IIFE]
//? [avoid global implementation - closure "narrowing scope" ]
(function(){
  console.log("V1");
})();
(function(){
  console.log("V2");
}());
void function(){
  console.log("V3");
}();
! function(){
  console.log("V4");
}();
//? callback fun [Higher order fun] "reduce , map"
let ar = ["ali","omar"]
console.log(ar.map(i=>i+"@iti.com"));
//? factory fun --> fun return obj
function factory(){
  return{
    id:1
  }
}
let f1 = factory()
console.log(f1.id , f1["id"] ,f1);
//? curry fun  [redux]
let calcSalary=(basic)=>(bonus)=>(deduction)=>{
   return basic+bonus-deduction
}
console.log(calcSalary(2000)(500)(200));
//? concise fun
let obj = {
  greeting(){
    console.log("hello");
  },
  sayHi:function(){
    console.log("hi");
  }
}
obj.greeting()
obj.sayHi()
//? ctor fun
function Person(name,id){
  this.name = name;
  this.id = id;

}

let p1 = new Person("ali",1)
console.log(p1);
//& Hoisting --> screening up 
//? var
console.log(xxx);
var xxx = 20;

// console.log(numm);
let numm = 545; //? TDZ
console.log(NaN === NaN , typeof NaN);
console.log(isNaN(NaN)); //? NaN , string , boolean ,...... [true]
console.log(Number.isNaN(NaN)); //? NaN [true]


console.log(sum(2,3)); //? actual value

function sum(x,y){
  return x+y
}

// console.log(sub(5,3));
let sub=function(x,y){
  return x-y
}


//& Closure 
function Outer(){
  // let name = "ali";
  //? lexical scope
  function Inner(){
    // let name = "omar"
    console.log(name);
  }
  Inner()
}
Outer()

// let count = 0;
// function Counter(){
//   return ++count;
// }
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());

function Counter(){
   let count = 0;
   function Increment(){
    return ++count
   }
   return{
    Increment
   }
}

let c1 = Counter()
console.log(c1.Increment());
console.log(c1.Increment());
console.log(c1.Increment());
console.log(c1.Increment());
console.log(c1.Increment());

var i=0 //? binding to the same i
for( ; i<3 ; i++){

  setTimeout(()=>console.log(i),1)
}
i=5;
for(var i=0;i<3;i++){
  setTimeout((function(index){
    //? lexical
   return function(){
    console.log(index);
   }
  }(i)),1)
}

for(let i=0 ; i<3 ; i++){
  //? i=0 , i=1 , i=2
  setTimeout(()=>console.log(i),1)
}