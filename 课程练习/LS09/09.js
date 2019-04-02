console.log(a);// undefined
var a = 1;
console.log(a);// 1

console.log(a,b);// undefined undefined
var b = 23;
console.log(a,b);// undefined 23
var a = b;
console.log(a,b);// 23 23

console.log(obj1,obj2);/// undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);// {x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);// {x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);// {x:25} {x:25}

foo();
var foo = function(){
    console.log("foo");
};

console.log(foo);// f() {console.log("foo");}
var foo = function(){
    console.log("foo");
};
foo();// 不会报错 输出foo

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();// Jack