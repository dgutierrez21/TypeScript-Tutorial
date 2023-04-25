// ❌❌❌❌❌❌
function obtenerElementoCadenaAleatoria(elementos: string[]): string {
  const indiceAleatorio = Math.floor(Math.random() * elementos.length);

  return elementos[indiceAleatorio];
}

const arrString = ["redux", "react", "typescript"];

console.log(obtenerElementoCadenaAleatoria(arrString));

function obtenerElementoNumeroAleatorio(elementos: number[]): number {
  const indiceAleatorio = Math.floor(Math.random() * elementos.length);

  return elementos[indiceAleatorio];
}

const arrNumber = [5, 10, 15];

console.log(obtenerElementoNumeroAleatorio(arrNumber));

// Más tarde, es posible que necesite obtener un elemento aleatorio en una matriz de objetos. Crear una nueva función cada vez que desee obtener un elemento aleatorio de un nuevo tipo de matriz no es escalable.

// Uso del tipo any
// Una solución para este problema es establecer el tipo del argumento de matriz como any[]. Al hacer esto, necesita escribir solo una función que funcione con una matriz de cualquier tipo.

function obtenerElementoAnyAleatorio(elementos: any[]): any {
  const indiceAleatorio = Math.floor(Math.random() * elementos.length);

  return elementos[indiceAleatorio];
}

const arrNumber2 = [20, 30, 40];

console.log(obtenerElementoAnyAleatorio(arrNumber2));

const colores = ["rojo", "azul", "verde"];

console.log(obtenerElementoAnyAleatorio(colores));

// Esta solución funciona bien. Sin embargo, tiene un inconveniente.

// No permite exigir el tipo del elemento devuelto. En otras palabras, no es seguro para tipos.

// Una mejor solución para evitar la duplicación de código mientras se preserva el tipo es usar genéricos.

// Los genéricos de TypeScript vienen al rescate

function obtenerElementoAleatorio<T>(elementos: T[]): T {
  const indiceAleatorio = Math.floor(Math.random() * elementos.length);

  return elementos[indiceAleatorio];
}
// Esta función utiliza la variable de tipo T. La T permite capturar el tipo que se proporciona en el momento de llamar a la función. Además, la función utiliza la variable de tipo T como su tipo de retorno.

const arrNumber3 = [27, 35, 55];

console.log(obtenerElementoAleatorio(arrNumber3));

const colores2 = ["amarillo", "celeste", "negro"];

// forma de llamar a una función genérica

console.log(obtenerElementoAleatorio(colores2)); // TypeScript establezca el valor de T automáticamente en función del tipo de argumento al que se pasa

console.log(obtenerElementoAleatorio<string>(colores2)); // se el asigna explicitamente el tipo T

// Funciones genéricas con múltiples tipos
function merge<U, V>(obj1: U, obj2: V): U & V {
  return { ...obj1, ...obj2 };
}

const resultado = merge({ nombre: "Pedro" }, { profesion: "Web Developer" });

console.log(resultado);

export const GenericosDeTypescript = () => {
  return <div>GenericosDeTypescript</div>;
};
