let precio: number;

// o

let precio2 = 1250.99;

// decimales

let contador: number = 10;

let num1: number = 100,
  num2: number = 200;

console.log(num1, num2);

// números binarios

let bin = 0b100,
  otroBin: number = 0b010;

console.log(bin, otroBin);

// octales

let octal: number = 0o10;

console.log(octal);

// Números hexadecimales

let hexa: number = 0xa;

console.log(hexa);

// Enteros grandes

let numBig: bigint = 9007199254740991n;

console.log(numBig);

// ejercicio

let edad;
// let edad: number = 10; // valid

const mayor: number = 17;

if (edad < mayor) {
  // Error - "edad" es posiblemente "undefined".

  console.log("Es menor de edad");
} else {
  console.log("Es mayor de edad");
}

// ejercicio #2
// tener en cuenta que NaN es considerado un número lo que puede llevar a futuros errores

edad = Number("34B");

console.log(edad); // NaN // Valid

export const TipoDeNumero = () => {
  return <div>TipoDeNumero</div>;
};
