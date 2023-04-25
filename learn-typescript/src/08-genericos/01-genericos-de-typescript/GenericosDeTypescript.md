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
