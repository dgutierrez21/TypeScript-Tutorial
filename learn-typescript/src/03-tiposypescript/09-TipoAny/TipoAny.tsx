const json = `{"latitude": 10.11, "longitude":12.12}`;

const ubicacionActual = JSON.parse(json);

console.log(ubicacionActual);

console.log(ubicacionActual.x); // El compilador de TypeScript no se queja ni emite ningún error.

// TypeScript any: escritura implícita

let resultado; // any

resultado = 10;

resultado = "hola";

console.log(resultado)

// TypeScript any vs. object

let resultado2: any;

resultado2 = 42.2348;

console.log(resultado2.toFixed());

resultado2.noExiste();

// *************

let resultado3: object;

resultado3 = 42.2348;

console.log(resultado3.toFixed());

resultado3.noExiste();

export const TipoAny = () => {
  return <div>TipoAny</div>;
};
