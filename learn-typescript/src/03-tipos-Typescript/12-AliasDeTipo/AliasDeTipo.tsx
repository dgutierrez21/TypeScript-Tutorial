type cad = string;

let mensaje: cad;

mensaje = "Hola Mundo";

console.log(mensaje);

// ejemplo de uso

type alfanumerico = string | number;

let input: alfanumerico;

input = "ABC"; // valid

input = 123; // valid

input = true; // compile error

export const AliasDeTipo = () => {
  return <div>AliasDeTipo</div>;
};
