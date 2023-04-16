// primitivos
let variable1: number;
variable1 = 34;

let variable2: string = "Valor variable 2";
const constante: boolean = true;

console.log(variable1, variable2, constante);

let counter: number;
counter = "TypeScript"; // Error --  El tipo 'string' no se puede asignar al tipo 'number'.

console.log(counter);

// array

let numeros: number[];

numeros = ["a", "b", "c"]; // Error -  El tipo 'string' no se puede asignar al tipo 'number[]'

numeros = "1, 2 , 3"; // Error -  El tipo 'string' no se puede asignar al tipo 'number[]'.

numeros = [1, 2, 3];

console.log(numeros);

// objetos

let person: {
  name: string;
  age: number;
  country: string;
};

person = {
  name: 24, // // Error -  El tipo 'number' no se puede asignar al tipo 'string'.
  age: "Pedro", //Error - El tipo 'string' no se puede asignar al tipo 'number'.,
  country: 3420349, // Error -  El tipo 'number' no se puede asignar al tipo 'string'.
}; // invalid

person = {
  name: "Pedro",
  age: 24,
  country: "Spain",
}; // valid

console.log(person);

// Argumentos de función y tipos de retorno

let saludar: (nombre: string, edad: number) => string;

saludar = (nombre, edad) => `Hola ${nombre}, su edad es ${edad}`;

console.log(saludar(23, "Diego")); // Error -  No se puede asignar un argumento de tipo "number" al parámetro de tipo "string".

console.log(saludar("Diego")); // Error -  Se esperaban 2 argumentos, pero se obtuvieron 1.

console.log(saludar("Diego", 30)); // valid

export const AnotacionesDeTipo = () => {
  return <div>AnotacionesDeTipo</div>;
};
