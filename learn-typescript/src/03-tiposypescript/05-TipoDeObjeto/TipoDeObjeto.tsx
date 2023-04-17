let persona: object;

persona = {
  nombre: "Pedro",
  edad: 34,
  profesion: "Web Developer",
}; // invalid

// persona = 10; // error -  El tipo 'number' no se puede asignar al tipo 'object'.

console.log(persona);

console.log(persona.nombre); // error -  La propiedad 'nombre' no existe en el tipo 'object'.

let persona2: {
  nombre: string;
  edad: number;
  profesion: string;
};

persona2 = {
  nombre: "Pedro",
  edad: 34,
  profesion: "Web Developer",
}; // valid

// o

const persona3: { nombre: string; edad: number; profesion: string } = {
  nombre: "Pedro",
  edad: 34,
  profesion: "Web Developer",
};

console.log(persona2);

console.log(persona2.profesion);

// propiedad opcional

const perro: { nombre: string; edad?: number } = {
  nombre: "Firu",
};

console.log(perro.nombre);
console.log(perro.edad); // undefined

// Índice Firmas

const nombreMapaEdad: { [index: string]: number } = {};
nombreMapaEdad.Pedro = 34;
nombreMapaEdad.Jona = 29;

console.log(nombreMapaEdad);

console.log(nombreMapaEdad.Pedro);
console.log(nombreMapaEdad.Jona);

export const TipoDeObjeto = () => {
  return <div>TipoDeObjeto</div>;
};
