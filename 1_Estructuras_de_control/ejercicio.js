var a= 0
var b= 1
var longitud= 15
var b2 =1

var fib= []

for (i=0 ; i < longitud; i++){
fib.push(b) ;
a = b;
b= a +b2 ;
}

console.log(fib)