function aniadir(a: number, b: number): number {
  return a + b;
}

aniadir("hola", "mundo"); // error

aniadir(20, 10); // valid

//  La palabra clave void indica que la función no devuelve ningún valor.

function saludo(mensaje: string): void {
  console.log(mensaje);
}

saludo("Hola Mundo TypeScript");

// Cuando no anote el tipo devuelto, TypeScript intentará inferir un tipo apropiado. Por ejemplo:

function aniadir2(a: number, msj: string) {
  return a + msj;
} // string

console.log(aniadir2(10, "hola"));

export const Funciones = () => {
  return <div>Funciones</div>;
};
