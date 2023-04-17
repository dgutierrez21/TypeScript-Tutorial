let nombre: string = "Pedro";

let titulo: string = "Web Developer";

const mensaje: string = `${nombre} es ${titulo}`;

console.log(mensaje);

const descripcion = `Esta cadena TypeScript puede
abarcar varias
líneas`;

console.log(descripcion);

// ejercicio

const nombre2: any = "Juan";

// console.log(nombre2.) // error - no genera autocompletado porque no sabe de que tipo es.

const nombre3: string = "Maria";

console.log(nombre3.toUpperCase()); // valid

export const TipoDeString = () => {
  return <div>TipoDeString</div>;
};
