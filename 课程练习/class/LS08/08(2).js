var foo = function (a,b){
    console.log(arguments);// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // 类似数组的一个对象
    // arguments 是Symbol类型，独一无二的，具体参见后续ES6部分
    console.log(arguments === test.arguments);// true

    console.log(arguments.length);// 4
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);// (4) [1, 2, 3, 4]
};
foo(1,2,3,4);

function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
swim(1,2);// i'm: i can swim ___ 1 2
swim.call(me,3,4);// i'm:ABC i can swim ___ 3 4
bird.fly(5,6);// i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);// i'm:ABC i can fly ___ 7 8
bird.fly.apply(me,[7,8]);// i'm:ABC i can fly ___ 7 8
swim.call(null,1,2);// i'm: i can swim ___ 1 2

swim.apply(me,[9,10]);// i'm:ABC i can swim ___ 9 10
bird.fly.apply(me,[11,12]);// i'm:ABC i can fly ___ 11 12
swim.apply(null,[13,14]);// i'm: i can swim ___ 13 14

//关于绑定 例一
//下述代码输出结果为（   A  ）
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();
//A.23  45
//B.23  23
//C.45  45
//D.45  23

function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});// 13
add(2,-3,Math.abs);// 5
add(2,3,Math.sqrt);//2的开平方加3的开平方

var x = 12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());// 输出： ƒ fun2() {return this.x};
console.log("输出：",obj.fun3()());// 输出： 12
console.log("输出：",obj.fun4());// 输出： 34