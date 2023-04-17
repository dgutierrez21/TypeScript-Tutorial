let contador: number;

let contador2 = 10;
// equivalente a let contador2: number = 10;

function multiplicarPor30(numero = 20) {
  return numero * 30;
}

// equivalente a
function multiplicarPor7(numero: number): number {
  return numero;
}

console.log(multiplicarPor30("30")); // Error - No se puede asignar un argumento de tipo "string" al parámetro de tipo "number".

console.log(multiplicarPor30(12000)); // valid

console.log(multiplicarPor7(1025)); // valid

// El mejor algoritmo de tipo común

let items = [null, 1, 2, 3]; // (number | null)[]

let items2 = [4, 5, "hola", null]; // (string | number | null)[]

let arr = [new Date(), new RegExp("d+")]; //  (RegExp | Date)[]

// Escritura contextual

document.addEventListener("click", function (event) {
  console.log(event.button);
});

document.addEventListener("scroll", function (event) {
  console.log(event.button); //  La propiedad 'button' no existe en el tipo 'Event'.
});

export default () => {
  return <div>InferenciaDeTipo</div>;
};
