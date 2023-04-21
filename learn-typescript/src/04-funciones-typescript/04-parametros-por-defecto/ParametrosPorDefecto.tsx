// javascript
// function name(parameter1=defaultValue1,...) {
//    // do something
// }

// Al igual que JavaScript, puede usar parámetros predeterminados en TypeScript con la misma sintaxis:

function aplicarDescuento(precio: number, descuento: number = 0.05): number {
  return precio * (1 - descuento);
}

console.log(aplicarDescuento(100)); // valid

// Tenga en cuenta que no puede incluir parámetros predeterminados en las definiciones de tipo de función. El código siguiente producirá un error:

// let promocion: (precio: number, descuento: number = 0.05) => number; // error - Un inicializador de parámetros solo se permite en una implementación de función o de constructor.

// ejemplo

function obtenerDia(
  anio: number = new Date().getFullYear(),
  mes: number
): number {
  let dia = 0;

  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dia = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dia = 30;
      break;
    case 2:
      if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        dia = 29;
      } else {
        dia = 28;
      }
      break;

    default:
      throw Error("Mes Inválido");
  }

  return dia;
}

// cualquier año
let dia = obtenerDia(2020, 2);

console.log(dia);

// año actual
let dia2 = obtenerDia(undefined, 2);

console.log(dia2);

export const ParametrosPorDefecto = () => {
  return <div>ParametrosPorDefecto</div>;
};
