const multiplicar: (num1: number, num2: number, num3?: number) => number = (
  num1,
  num2,
  num3
) => {
  if (typeof num3 !== "undefined") return num1 * num2 * num3;

  return num1 * num2;
};

const resultado = multiplicar(1500, 8); // valid

console.log(resultado);

// los parametros opcionales siempre deben ir despues de los obligatorios

const multiplicar2: (num1: number, num2?: number, num3: number) => number = (
  num1,
  num2,
  num3
) => {
  if (typeof num3 !== "undefined") return num1 * num2 * num3;

  return num1 * num2;
}; // invalid

export const ParametrosOpcionales = () => {
  return <div>ParametrosOpcionales</div>;
};
