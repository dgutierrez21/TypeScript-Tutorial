let arr: string[] = [];

arr.push(3); // error -  No se puede asignar un argumento de tipo "number" al parámetro de tipo "string".

arr.push("Pedro"); // valid

console.log(arr);

// inferencia

let habilidades = ["TypeScript", "React"];

console.log(habilidades);

// equivalente a

let habilidades2: string[];

habilidades2 = ["TypeScript", "React"];

console.log(habilidades2);

habilidades2.push(24); // error -  No se puede asignar un argumento de tipo "number" al parámetro de tipo "string".

// Sólo lectura
// La palabra clave readonly puede impedir que se cambien las matrices.

const nombres: readonly string[] = ["Pedro", "Juan", "Pepe"];

const nuevosNombres: string[] = nombres.filter((nombre: string) =>
  nombre.includes("Pe")
); // valid

console.log(nuevosNombres);

nombres.push("María"); // error - La propiedad 'push' no existe en el tipo 'readonly string[]'.

// Propiedades y métodos de la matriz TypeScript

const numeros = [1, 2, 3];

console.log(numeros.length); // 3

const multiplicados = numeros.map((numero) => numero * 2);

console.log(multiplicados); // [2 , 4 , 6]

// Almacenamiento de valores de tipos mixtos

const arr2 = ["React", 5, "Typescript", 10];

// equivalente a

const arr3: (string | number)[] = ["React", 5, "Typescript", 10];

arr3.push("Hola"); // valid
arr3.push(20); // valid

arr3.push(true); // invalid

export const TipoDeArray = () => {
  return <div>TipoDeArray</div>;
};
