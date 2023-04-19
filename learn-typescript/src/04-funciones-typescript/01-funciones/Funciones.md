# Funciones de TypeScript

Resumen: en este tutorial, aprenderá acerca de las funciones de TypeScript y cómo utilizar anotaciones de tipo para aplicar las comprobaciones de tipo para las funciones.

## Introducción a las funciones de TypeScript

Las funciones de TypeScript son los bloques de creación de código legible, fácil de mantener y reutilizable.

Al igual que JavaScript, se utiliza la palabra clave function para declarar una función en TypeScript:

    function name(parameter: type, parameter:type,...): returnType {
       // do something
    }

A diferencia de JavaScript, TypeScript permite utilizar anotaciones de tipo en parámetros y devolver valor de una función.

Veamos el siguiente ejemplo de función add()

    function add(a: number, b: number): number {
    return a + b;
    }

En este ejemplo, la función add() acepta dos parámetros con el tipo number.

Cuando se llama a la función add() el compilador de TypeScript comprobará cada argumento pasado a la función para asegurarse de que son números.

En el ejemplo de la función add() solo puede pasar números en él, no los valores de otros tipos.

El código siguiente producirá un error porque pasa dos cadenas en lugar de dos números a la función add()

    let sum = add('10', '20');

Error:

    error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'

Los tipos de los parámetros de función también están disponibles dentro del cuerpo de la función para la comprobación de tipos.

El : number después de los paréntesis indica el tipo de retorno. La función add() devuelve un valor del tipo de number en este caso.

Cuando una función tiene un tipo devuelto, el compilador de TypeScript comprueba cada instrucción return con el tipo devuelto para asegurarse de que el valor devuelto es compatible con él.

Si una función no devuelve un valor, puede utilizar el tipo void como tipo devuelto. La palabra clave void indica que la función no devuelve ningún valor. Por ejemplo:

    function echo(message: string): void {
        console.log(message.toUpperCase());
    }

El void impide que el código dentro de la función devuelva un valor e impide que el código de llamada asigne el resultado de la función a una variable.

Cuando no anote el tipo devuelto, TypeScript intentará inferir un tipo apropiado. Por ejemplo:

    function add(a: number, b: number) {
        return a + b;
    }

En este ejemplo, el compilador TypeScript intenta inferir el tipo devuelto de la función add() al tipo number, que se espera.

Sin embargo, si una función tiene diferentes ramas que devuelven diferentes tipos, el compilador de TypeScript puede inferir el tipo union o any tipo.

Por lo tanto, es importante agregar anotaciones de tipo a una función tanto como sea posible.

## Resumen

- Utilice anotaciones de tipo para los parámetros de función y el tipo de retorno para mantener el código de llamada en línea y garantizar que el tipo se compruebe dentro del cuerpo de la función.
