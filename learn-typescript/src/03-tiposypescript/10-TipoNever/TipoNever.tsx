const raiseError = (mensaje: string): never => {
  throw new Error(mensaje);
};

const reject = () => raiseError("Esta función devuelve el tipo never");

// **********

let loop = function forever() {
  while (true) {
    console.log("Hola");
  }
}; // tipo never

// *********

// sin never
// Por ejemplo, sin el tipo never , la siguiente función provoca un error porque no todas las rutas de código devuelven un valor.

function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
} //  Falta la instrucción "return" final en la función y el tipo de valor devuelto no incluye 'undefined'.

// Para que el código sea válido, puede devolver una función cuyo tipo de retorno sea el tipo never.

function fn2(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }

  return neverOccur();
} // valid

const neverOccur = () => {
  throw new Error("Never!!!");
};

export const TipoNever = () => {
  return <div>TipoNever</div>;
};
