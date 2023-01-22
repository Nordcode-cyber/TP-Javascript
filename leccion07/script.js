let a = 8, b = 2, c = 12, d = 4;
let e = 5, f = 8, g = 16, h = 6;//usar con la variable y
let i = 11, j =18, k = 24, l = 64; //usar con la variable x
let z = (a * b) + c / d;
console.log("el resultado de la operacion => (a * b) + c / d es: "+z);//19
z = (a*b*c) +c / d;
console.log( "el resultado de la operación => (a*b*c) +c / d es: "+z );//195 
z = c / b *((c/d) + c * b ); 
console.log( "el resultado de la operacion =>  c/ b *((c/d) + c * b ) es: "+z );//162 
z = (c + a) * b + (c **b) / 6 ;
console.log("el resultado de la operación => (c + a) * b + (c **b) / 6 es: "+z);//64
let y = (e*f-g) +g / h;
console.log(" el resultado de la operación => (e*f-g) +g / h es: "+y);//26.666666666668
y = (e*(f +g)/6 * (g/f)/5);
console.log("el resultado de la operación => (e*f+g*l/k) es: " + y);//8
y = (g-h) + (e*h) - g/f -(e**2);
console.log("el resultado de la operación => (g-h) + (e*h) - g/h - (e**2) es: "+y);//13
y = ((f**2)/4 * (h *e)/48)**4;
console.log("el resultado de la operacion => ((f**2)/4 * (h *e)/48)**4 es:  "+y);//1000
//let i = 11, j =18, k = 24, l = 64; 
let x = (i+j/3+h*(k-i))/19 +2**3;
console.log("el resultado de la operación => (i+j/3+h*(k-i))/19 +2**3 es: "+x);//13
