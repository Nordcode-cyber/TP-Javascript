let a = 1;
a += 3; // a = a + 3
console.log("a +=3 => a = a + 3 es: "+a);//suma
a -=6; //  a = a - 6
console.log("a -=6 => a = a - 6 es: "+a);//resta
a *=-4;//  a = a* 4
console.log("a *=-4 => a = a * 4 es: "+a);//producto
a /=2;// a = a/4
console.log("a /= 2 => a = a / 4 es: "+a);//division
a **= 10; //a = a **10 
console.log("a **=10 => a = a **10 es:  "+a);// potencia
a %=6; // a = a % 6
console.log("a %=6  =>  a = a % 6"+a);//resto

/*l+=, -=, *=, /=, %=,**=*/
let b = -2;
console.log(b);//-2 valor inicializado
b -=6;
console.log(b);// b = b -6 
b +=16;
console.log(b);//b = b + 16
b **=8;
console.log(b);// b = b **8
b /= 4;
console.log(b);//b = b / 4
b %=5;
console.log(b);// b = b % 5 resto
//operadores distintos revisando tipos
let l = 3, m = 2, c = 3;
let d =1, e =5, f=6, g = '2';
let z = a != b; // se revisa el valor sin importar el tipo
console.log(z);
z = a !== c;// revisa los valores pero tambien los tipos
console.log(z);
z = d !==a;
console.log(z);
z = b !== g;
console.log(z);
z = l!==g;
console.log(z);