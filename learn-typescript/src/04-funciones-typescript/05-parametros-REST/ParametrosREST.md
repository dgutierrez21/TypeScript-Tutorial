# Parámetros de REST de TypeScript
**Resumen**: en este tutorial, aprenderá sobre los parámetros rest de TypeScript que le permiten representar un número indefinido de argumentos como una matriz.

Un parámetro rest permite que una función acepte cero o más argumentos del tipo especificado. En TypeScript, los parámetros rest siguen estas reglas:

- Una función sólo tiene un parámetro rest.

- El parámetro rest aparece en último lugar en la lista de parámetros.

- El tipo del parámetro rest es un tipo de matriz.

Para declarar un parámetro rest, anteponga el nombre del parámetro con tres puntos y utilice el tipo de matriz como anotación de tipo:

    function fn(...rest: type[]) {
       //...
    }

En el ejemplo siguiente se muestra cómo utilizar el parámetro rest:

    function getTotal(...numbers: number[]): number {
        let total = 0;
        numbers.forEach((num) => total += num);
        return total;
    }

En este ejemplo, getTotal() calcula el total de números pasados en él.

Dado que el parámetro numbers es un parámetro rest, puede pasar uno o más números para calcular el total:

    console.log(getTotal()); // 0
    console.log(getTotal(10, 20)); // 30
    console.log(getTotal(10, 20, 30)); // 60

En este tutorial, ha aprendido acerca de los parámetros rest de TypeSript que le permiten representar un número indefinido de argumentos como una matriz.