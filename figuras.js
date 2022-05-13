//codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado()
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrada + "cm'2");
console.groupEnd();

//codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log( 
//   "Los lados del triangulo miden: " 
//   + ladoTriangulo
//   + "cm " 
//   + ladoTriangulo2
//   + "cm " 
//   + baseTriangulo 
//   + "cm "
// );

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}


console.groupEnd();

//codigo del circulo
console.group("Circulos");

//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es " + radioCirculo + "cm");
//diametro

function diametroCirculo(radio) {
  return radio * 2;
}
//console.log("El diametro del circulo es " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("PI es " + PI + "cm");

//Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//console.log("El perimetro del circulo es " + perimetroCirculo + "cm");
//Area

function areaCirculo(radio) {
  return (radio * radio) * PI;
}
//console.log("El area del circulo es " + areaCirculo + "cm'2");


console.groupEnd();