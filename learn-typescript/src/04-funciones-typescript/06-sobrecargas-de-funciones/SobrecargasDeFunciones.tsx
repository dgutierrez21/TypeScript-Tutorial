function aniadirNumeros(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(aniadirNumeros(10, 20));

function aniadirCadenas(str1: string, str2: string): string {
  return `${str1} ${str2}`;
}

console.log(aniadirCadenas("Steve", "Jobs"));

// Es posible utilizar un tipo de unión para definir un rango de tipos para los parámetros de función y los resultados:

function aniadirNumOStr(
  a: string | number,
  b: string | number
): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;

  if (typeof a === "string" && typeof b === "string") return `${a} ${b}`;

  throw new Error("El valor ingresado no es válido.");
}

console.log(aniadirNumOStr("Hello", "World"));
console.log(aniadirNumOStr(5, 10));

// Sin embargo, el tipo de unión no expresa la relación entre los tipos de parámetros y los resultados con precisión.

// Para describir mejor las relaciones entre los tipos utilizados por una función, TypeScript admite sobrecargas de funciones.

function aniadirNumOStr2(a: number, b: number): number;
function aniadirNumOStr2(a: string, b: string): string;
function aniadirNumOStr2(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") return a + b;

  if (typeof a === "string" && typeof b === "string") return `${a} ${b}`;

  throw new Error("El valor ingresado no es válido.");
}

console.log(aniadirNumOStr2(10, 30));
console.log(aniadirNumOStr2("Hola", "Mundo"));

function sumar(a: number, b: number): number;
function sumar(a: number, b: number, c: number): number;
function sumar(a: number, b: number, c?: number): number {
  if (c) return a + b + c;

  return a + b;
}

console.log(sumar(5, 10));

class Contador {
  private actual: number = 0;
  cuenta(): number;
  cuenta(target: number): number[];
  cuenta(target?: number): number | number[] {
    if (target) {
      let valores = [];

      for (let empezar = this.actual; empezar <= target; empezar++) {
        valores.push(empezar);
      }

      this.actual = target;
      return valores;
    }

    return ++this.actual;
  }
}

let contador = new Contador();

console.log(contador.cuenta()); // 0
console.log(contador.cuenta(100)); // 0

export const SobrecargasDeFunciones = () => {
  return <div>sobrecargasDeFunciones</div>;
};
