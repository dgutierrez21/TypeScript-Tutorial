function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

const persona = merge({ nombre: "John" }, { edad: 30 });

console.log(persona);

// Funciona perfectamente bien.

// La función merge() espera dos objetos. Sin embargo, no le impide pasar un no objeto como este:

let persona2 = merge({ nombre: "Erick" }, 35);

console.log(persona2);

// TypeScript no emite ningún error.

// En lugar de trabajar con todos los tipos, es posible que desee agregar una restricción a la función merge() para que funcione sólo con objetos.

// Para hacer esto, debe enumerar el requisito como una restricción sobre lo que pueden ser los tipos U y V.

// Para denotar la restricción, utilice la palabra clave extends. Por ejemplo:

function merge2<U extends object, V extends object>(obj1: U, obj2: V) {
  return { ...obj1, ...obj2 };
}

const persona3 = merge2({ nombre: "Pablo" }, { edad: 18 }); // valid
const persona4 = merge2({ nombre: "Pablo" }, 45); // Error - No se puede asignar un argumento de tipo "number" al parámetro de tipo "object".ts(2345)
console.log(persona3);

// Uso de parámetros de tipo en restricciones genéricas

function prop<T, K>(obj: T, key: K) {
  return obj[key]; // El tipo 'K' no se puede usar para indexar el tipo 'T'.ts(2536)
}

function prop2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
} // valid

const resultado = prop2({ nombre: "James" }, "nombre"); // valid

console.log(resultado);

const resultado2 = prop2({ nombre: "James", apellido: "Ortiz" }, "edad"); // No se puede asignar un argumento de tipo ""edad"" al parámetro de tipo ""nombre" | "apellido"".ts(2345)

export const RestriccionesGenericas = () => {
  return <div>RestriccionesGenericas</div>;
};
