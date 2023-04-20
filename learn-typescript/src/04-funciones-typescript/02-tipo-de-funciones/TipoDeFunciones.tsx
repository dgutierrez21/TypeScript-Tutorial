let aniadir: (x: number, y: number) => number;

aniadir = (x, y) => x + y;
console.log(aniadir(50, 30));

// Además, puede declarar una variable y asignar una función a una variable como esta:

const aniadir2: (a: string, b: number) => string = (a, b) =>
  `Su nombre es ${a} y tiene ${b} años.`;

console.log(aniadir2("Pedro", 34));

// Inferir tipos de funciones

let aniadir3 = (x: number, y: number): number => {
  return x * y;
};

let resultado = aniadir3(3, 5);

console.log(resultado);

export const TipoDeFunciones = () => {
  return <div>TipoDeFunciones</div>;
};
