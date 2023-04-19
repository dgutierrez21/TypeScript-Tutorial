# Introducción al tipo de unión TypeScript
A veces, se encontrará con una función que espera un parámetro que sea un número o una cadena. Por ejemplo:

  function add(a: any, b: any) {
      if (typeof a === 'number' && typeof b === 'number') {
          return a + b;
      }
      if (typeof a === 'string' && typeof b === 'string') {
          return a.concat(b);
      }
      throw new Error('Parameters must be numbers or strings');
  }

En este ejemplo, la función add() calculará la suma de sus parámetros si son números.

En caso de que los parámetros sean cadenas, la función add() los concatenará en una sola cadena.

Si los parámetros no son ni números ni cadenas, la función add() produce un error.

El problema con los parámetros de la función add() es que sus parámetros tienen el tipo any. Significa que puede llamar a la función con argumentos que no son ni números ni cadenas, el TypeScript estará bien con ella.

Este código se compilará correctamente pero causará un error en tiempo de ejecución:

  add(true, false);

Para resolver esto, puede usar el tipo de unión TypeScript. El tipo de unión le permite combinar varios tipos en un solo tipo.

Por ejemplo, la siguiente variable es de tipo number o string:

  let result: number | string;
  result = 10; // OK
  result = 'Hi'; // also OK
  result = false; // a boolean value, not OK

Un tipo de unión describe un valor que puede ser uno de varios tipos, no sólo dos. Por ejemplo, número | cadena number | string | boolean es el tipo de un valor que puede ser un número, una cadena o un valor booleano.

Volviendo al ejemplo de la función add() puede cambiar los tipos de los parámetros de any a unión de esta manera:

  function add(a: number | string, b: number | string) {
      if (typeof a === 'number' && typeof b === 'number') {
          return a + b;
      }
      if (typeof a === 'string' && typeof b === 'string') {
          return a.concat(b);
      }
      throw new Error('Parameters must be numbers or strings');
  }

# Resumen
- Un tipo de unión TypeScript permite almacenar un valor de uno o varios tipos en una variable.