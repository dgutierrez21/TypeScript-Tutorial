let resultado: number | string;

resultado = 10; // valid

resultado = "Hola Mundo"; // valid

resultado = true; // invalid

// genera un error en tiempo de compilación
function aniadir(a: any, b: any) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Los parámetros deben ser números o cadenas");
}

// aniadir(true, false); // valid

// para resolverlo se usa el tipo unión en los parametros

function aniadir2(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Los parámetros deben ser números o cadenas");
}

aniadir2(true, false); // invalid

export const TipoUnion = () => {
  return <div>TipoUnion</div>;
};
