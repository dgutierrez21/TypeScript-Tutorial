let habilidades: [string, number];

habilidades = ["Frontend", 5];

console.log(habilidades);

// el orden de la tupla es importante
habilidades = [5, "Frontend"]; // error -  El tipo 'number' no se puede asignar al tipo 'string'.

const color: [number, number, number] = [255, 0, 0];

// Elementos de tupla opcionales

let bgColor, headerColor: [number, number, number, number?];

bgColor = [0, 255, 255, 0.2];
headerColor = [0, 255, 255];

export const TipoDeTuple = () => {
  return <div>TipoDeTuple</div>;
};
