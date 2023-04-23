// código difícil de leer.
function obtenerNombreCompleto(persona: { nombre: string; apellido: string }) {
  return persona.nombre + " " + persona.apellido;
}

let persona = {
  nombre: "Pedro",
  apellido: 25,
};

console.log(obtenerNombreCompleto(persona)); //Error - Los tipos de propiedad 'apellido' no son compatibles. El tipo 'number' no se puede asignar al tipo 'string'.

let persona2 = {
  nombre: "Pedro",
  apellido: "Perez",
};

console.log(obtenerNombreCompleto(persona2)); // valid

// Como se puede ver claramente en el código, la anotación de tipo del argumento de la función hace que el código sea difícil de leer.

// Para resolver esto, TypeScript introduce el concepto de interfaces.

interface Persona {
  nombre: string;
  apellido: string;
}

// El código ahora es más fácil de leer que antes.
function obtenerNombreCompleto2(persona: Persona) {
  return `${persona.nombre} ${persona.apellido}`;
}

let Melanie = {
  nombre: "Melanie",
  apellido: "Carney",
};

console.log(obtenerNombreCompleto2(Melanie));

// no necesariamente tiene que tener exactamente dos propiedades de cadena.

let david = {
  nombre: "David",
  apellido: "Beckham",
  edad: 47,
  altura: "6′0",
};

const nombreCompletoDavid = obtenerNombreCompleto2(david);

console.log(nombreCompletoDavid);

// Propiedades opcionales
interface Persona2 {
  nombre: string;
  primerApellido: string;
  segundoApellido?: number;
}

function obtenerNombreComplet3(persona: Persona2): string {
  if (persona.segundoApellido)
    return `${persona.nombre} ${persona.primerApellido} ${persona.segundoApellido}`;

  return persona.nombre + " " + persona.primerApellido;
}

const kristy = {
  nombre: "Kristy",
  primerApellido: "Blevins",
}; // valid

console.log(obtenerNombreComplet3(kristy));

// Propiedades de solo lectura
interface Persona3 {
  readonly nombre: string;
  readonly apellido: string;
  edad: number;
}

const persona3: Persona3 = {
  nombre: "Annie",
  apellido: "Villa",
  edad: 25,
};

persona3.nombre = "Wendi"; // Error - No se puede asignar a "nombre" porque es una propiedad de solo lectura.

persona3.edad = 40; // valid

console.log(persona3);

export const IntroInterfaces = () => {
  return <div>IntroInterfaces</div>;
};
