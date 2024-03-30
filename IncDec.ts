console.log("Q#1");
var a:number=2;
var b:number=++a * 2;
// 3*2=6
console.log("b=",b);
console.log("Q#2");
var x:number=5;
var y:number=x--+2;
//5+2=7
console.log("y=",y);
console.log("Q#3");
x=3;
y= ++x + x++ + ++x;
//4+4+6=14
console.log("y=",y);
console.log("Q#4");
var m:number=2;
var n:number= ++m * m++ * --m;
//3*3*3=27
console.log("n=",n);
console.log("Q#5");
a=3;
b=5;
var result:number= ++a + b-- - a++ + --b;
//4+5-4+3=2
console.log("result=",result);
console.log("Q#6");
m=2;
n=4;
var p:number= m++ + ++n - --m + n--;
//2+5-2+5=10
console.log("p=",p);
console.log("n=",n);
console.log("m=",m);
console.log("Q#7");
a=5;
b=3;
var c:number=2;
var d:number=7;
result= ++a * (b-- + c) / --d;
//5*(3+2)/6=5*5/6=
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
console.log("d=",d);
console.log("result=",result);
console.log("Q#8");
m=2;
n=3;
var o:number=4;
result= m++ * (--n + m) / (o-- - n);
//2*(2+3)/(4-2)=5
console.log("m=",m);
console.log("n=",n);
console.log("o=",o);
console.log("result=",result);