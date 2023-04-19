### Inferencia de tipos de TypeScript

Resumen: en este tutorial, aprenderá sobre la inferencia de tipos en TypeScript.

La inferencia de tipos describe dónde y cómo TypeScript infiere tipos cuando no se anotan explícitamente.

## Inferencia de tipos básicos

Al declarar una variable, puede utilizar una anotación de tipo para especificar explícitamente un tipo para ella. Por ejemplo:

    let counter: number;

Sin embargo, si inicializa la variable de contador en un número, TypeScript inferirá que el tipo del counter es number.counter Por ejemplo:

    let counter = 0;

Es equivalente a la siguiente afirmación:

    let counter: number = 0;

Del mismo modo, cuando se asigna un valor a un parámetro de función, TypeScript infiere el tipo del parámetro al tipo del valor predeterminado. Por ejemplo:

    function setCounter(max=100) {
    // ...
    }

En este ejemplo, TypeScript infiere que el tipo del parámetro max es number.

De forma similar, TypeScript infiere el siguiente tipo de retorno de la función increment() como number:

    function increment(counter: number) {
    return counter++;
    }

Es lo mismo que:

    function increment(counter: number) : number {
    return counter++;
    }

## El mejor algoritmo de tipo común

Considere la siguiente asignación:

    let items = [1, 2, 3, null];

Para inferir el tipo de variable de items, TypeScript debe tener en cuenta el tipo de cada elemento de la matriz.

Utiliza el mejor algoritmo de tipo común para analizar cada tipo de candidato y seleccionar el tipo que es compatible con todos los demás candidatos.

En este caso, TypeScript selecciona el tipo de matriz numérica (number[]) como el mejor tipo común.

Si agrega una cadena a la matriz de elementos, TypeScript inferirá el tipo de los items como una matriz de números y cadenas: (number | string)[]
let items = [0, 1, null, 'Hi'];

Cuando TypeScript no puede encontrar el mejor tipo común, devuelve el tipo de matriz de unión. Por ejemplo:

    let arr = [new Date(), new RegExp('\d+')];

En este ejemplo, TypeScript infiere que el tipo para arr sea (RegExp | Date)[].

## Escritura contextual

TypeScript utiliza ubicaciones de variables para inferir sus tipos. Este mecanismo se conoce como tipificación contextual. Por ejemplo:

    document.addEventListener('click',  function (event) {
    console.log(event.button); //
    });

En este ejemplo, TypeScript sabe que el parámetro event es una instancia de MouseEvent debido al evento click.

Sin embargo, al cambiar el evento click al evento scroll, TypeScript emitirá un error:

    document.addEventListener('scroll',     function (event) {
    console.log(event.button); // compiler error
    });

Error:

    Property 'button' does not exist on type 'Event'.(2339)

TypeScript sabe que el event en este caso es una instancia de UIEvent, no un MouseEvent. Y UIEvent no tiene la propiedad button, por lo tanto, TypeScript arroja un error.

Encontrará escritura contextual en muchos casos, como argumentos para llamadas a funciones, aserciones de tipo, miembros de objetos y literales de matriz, instrucciones de retorno y lados derechos de las asignaciones.

## Inferencia de tipos frente a anotaciones de tipo

A continuación se muestra la diferencia entre inferencia de tipos y anotaciones de tipo:

| Inferencia de tipos | Escribir anotaciones |
| ------------------- | -------------------- |
TypeScript adivina el tipo|Indicar explícitamente a TypeScript el tipo

Entonces, ¿cuándo se usa la inferencia de tipos y las anotaciones de tipo?

En la práctica, siempre debe usar la inferencia de tipo tanto como sea posible. Y usas la anotación de tipo en los siguientes casos:

* Cuando declara una variable y le asigna un valor más adelante.

* Cuando quieres una variable que no se puede inferir.

* Cuando una función devuelve el any y necesita aclarar el valor.

## Resumen
* La inferencia de tipos se produce al inicializar variables, establecer valores predeterminados de parámetros y determinar tipos devueltos de funciones.

* TypeScript utiliza el mejor algoritmo de tipos comunes para seleccionar los mejores tipos candidatos que sean compatibles con todas las variables.

* TypeScript también utiliza la escritura contextual para inferir tipos de variables en función de las ubicaciones de las variables.
