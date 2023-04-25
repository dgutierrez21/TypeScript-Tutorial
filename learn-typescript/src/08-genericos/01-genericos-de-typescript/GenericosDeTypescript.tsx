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

export const GenericosDeTypescript = () => {
  return <div>GenericosDeTypescript</div>;
};
