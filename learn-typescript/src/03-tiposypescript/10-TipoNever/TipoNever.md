# TypeScript Tipo Never

Resumen: en este tutorial, aprenderá sobre el never que no contiene ningún valor.

El tipo never en TypeScript se utiliza para indicar valores que nunca ocurrirán. Se utiliza cuando se está seguro de que algo nunca va a ocurrir. Por ejemplo, es el tipo de retorno para una expresión de función o una expresión de función de flecha que siempre genera una excepción o una que nunca devuelve.

El tipo never es un tipo que no contiene valores. Debido a esto, no puede asignar ningún valor a una variable con un tipo never.

Normalmente, se utiliza el tipo never para representar el tipo devuelto de una función que siempre produce un error. Por ejemplo:

    function raiseError(message: string): never {
        throw new Error(message);
    }

El tipo devuelto de la siguiente función se infiere al tipo never:

    function reject() {
       return raiseError('Rejected');
    }

Si tiene una expresión de función que contiene un bucle indefinido, su tipo de retorno también es el tipo never. Por ejemplo:

    let loop = function forever() {
        while (true) {
            console.log('Hello');
        }
    }

En este ejemplo, el tipo del tipo de retorno de la función forever() never es.

Si ve que el tipo de retorno de una función never es, debe asegurarse de que no es lo que pretendía hacer.

Las variables también pueden adquirir el tipo never cuando se reduce su tipo por un protector de tipo que nunca puede ser verdadero.

Por ejemplo, sin el tipo never , la siguiente función provoca un error porque no todas las rutas de código devuelven un valor.

    function fn(a: string | number): boolean {
      if (typeof a === "string") {
        return true;
      } else if (typeof a === "number") {
        return false;
      }
    }

Para que el código sea válido, puede devolver una función cuyo tipo de retorno sea el tipo never.

    function fn(a: string | number): boolean {
      if (typeof a === "string") {
        return true;
      } else if (typeof a === "number") {
        return false;
      }
      // make the function valid
      return neverOccur();
    }

    let neverOccur = () => {
       throw new Error('Never!');
    }

# Resumen

- El tipo never no contiene ningún valor.

- El tipo never representa el tipo devuelto de una función que siempre produce un error o una función que contiene un bucle indefinido.
