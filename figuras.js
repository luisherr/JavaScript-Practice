console.group("Cuadrados");


function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado()


function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();


console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();



console.group("Circulos");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;
console.log("PI es " + PI + "cm");

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}


console.groupEnd();


function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function trianguloIso(){
  let lado1 = document.getElementById("isoLado1");
  let iLado1 = parseFloat(lado1.value);

  let lado2 = document.getElementById("isoLado2");
  let iLado2 = parseFloat(lado2.value);

  let base = document.getElementById("isoBase");
  let iBase = parseFloat(base.value);

  if(iLado1 != iLado2){
      alert("No se puede calcular debido a que los lados son diferentes");
  }else{
      const pequenoLado2 = iBase /2; 
      const pequenoBase = iLado1;

      const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
      const pequenoBaseCuadrado = pequenoBase * pequenoBase;
       
      let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

      const grandeAltura = pequenoLado1;
      alert(`La altura del triangulo es: ${grandeAltura}cm`);
  }
}