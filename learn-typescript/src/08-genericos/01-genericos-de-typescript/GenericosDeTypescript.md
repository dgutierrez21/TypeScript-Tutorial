# Genéricos de TypeScript

**Resumen**: en este tutorial, aprenderá acerca de los genéricos de TypeScript que le permiten usar tipos como parámetros formales.

## Introducción a los genéricos de TypeScript

Los genéricos en TypeScript son una característica que permite parametrizar tipos en una definición de función, clase o interfaz. Esto proporciona una forma de reutilizar código y crear componentes más flexibles y reutilizables.

Será más fácil explicar los genéricos de TypeScript a través de un ejemplo simple.

Supongamos que necesita desarrollar una función que devuelva un elemento aleatorio en una matriz de números.

La siguiente función getRandomNumberElement() toma una matriz de números como parámetro y devuelve un elemento aleatorio de la matriz:

    function getRandomNumberElement(items: number[]): number {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

Para obtener un elemento aleatorio de una matriz, debe:

- Busque primero el índice aleatorio.

- Obtenga el elemento aleatorio basado en el índice aleatorio.

Para encontrar el índice aleatorio de una matriz, usamos Math.random() que devuelve un número aleatorio entre 0 y 1, lo multiplicamos por la longitud de la matriz y aplicamos Math.floor() en el resultadoMath.random()

A continuación se muestra cómo utilizar la función getRandomNumberElement()

    let numbers = [1, 5, 7, 4, 2, 9];
    console.log(getRandomNumberElement(numbers));

Suponiendo que necesita obtener un elemento aleatorio de una matriz de cadenas. Esta vez, puede crear una nueva función:

    function getRandomStringElement(items: string[]): string {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

La lógica de la función getRandomStringElement() es la misma que la de la función getRandomNumberElement() getRandomStringElement()
En este ejemplo se muestra cómo utilizar la función getRandomStringElement()

    let colors = ['red', 'green', 'blue'];
    console.log(getRandomStringElement(colors));

Más tarde, es posible que necesite obtener un elemento aleatorio en una matriz de objetos. Crear una nueva función cada vez que desee obtener un elemento aleatorio de un nuevo tipo de matriz no es escalable.

## Uso del tipo any

Una solución para este problema es establecer el tipo del argumento de matriz como any[]. Al hacer esto, necesita escribir solo una función que funcione con una matriz de cualquier tipo.

    function getRandomAnyElement(items: any[]): any {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

El getRandomAnyElement() funciona con una matriz de any tipo que incluye una matriz de números, cadenas, objetos, etc.:

    let numbers = [1, 5, 7, 4, 2, 9];
    let colors = ['red', 'green', 'blue'];

    console.log(getRandomAnyElement(numbers));
    console.log(getRandomAnyElement(colors));

Esta solución funciona bien. Sin embargo, tiene un inconveniente.

No permite exigir el tipo del elemento devuelto. En otras palabras, no es seguro para tipos.

Una mejor solución para evitar la duplicación de código mientras se preserva el tipo es usar genéricos.

## Los genéricos de TypeScript vienen al rescate

A continuación se muestra una función genérica que devuelve el elemento aleatorio de una matriz de tipo T:

    function getRandomElement<T>(items: T[]): T {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

Esta función utiliza la variable de tipo T. La T permite capturar el tipo que se proporciona en el momento de llamar a la función. Además, la función utiliza la variable de tipo T como su tipo de retorno.

Esta función getRandomElement() es genérica porque puede trabajar con cualquier tipo de datos, incluyendo cadena, número, objetos,...

Por convención, usamos la letra T como variable de tipo. Sin embargo, puede usar libremente otras letras como A, B C, ...
