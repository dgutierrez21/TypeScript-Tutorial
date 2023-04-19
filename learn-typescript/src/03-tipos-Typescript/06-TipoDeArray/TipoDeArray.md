# Tipo de matriz TypeScript

Resumen: en este tutorial, aprenderá sobre el tipo de array TypeScript y sus operaciones básicas.

## Introducción al tipo de matriz TypeScript

Una array TypeScript es una lista ordenada de datos. Para declarar una matriz que contiene valores de un tipo específico, utilice la sintaxis siguiente:

    let arrayName: type[];

Por ejemplo, a continuación se declara una matriz de cadenas:

    let skills: string[];

Y puede agregar una o más cadenas a la matriz:

    skills[0] = "Problem Solving";
    skills[1] = "Programming";

o utilice el método push()

    skills.push('Software Design');

A continuación se declara una variable y se le asigna una matriz de cadenas:

    let skills = ['Problem Sovling','Software Design','Programming'];

En este ejemplo, TypeScript infiere skills skills como una matriz de cadenas. Es equivalente a lo siguiente:

    let skills: string[];
    skills = ['Problem Sovling','Software Design','Programming'];

Una vez que defina una matriz de un tipo específico, TypeScript evitará que agregue valores incompatibles a la matriz.

Lo siguiente provocará un error:

    skills.push(100);

... Porque estamos intentando agregar un número a la matriz de cadenas.

Error:

    Argument of type 'number' is not assignable to parameter of type 'string'.

Cuando se extrae un elemento de la matriz, TypeScript puede realizar inferencias de tipos. Por ejemplo:

    let skill = skills[0];
    console.log(typeof(skill));

Salida:

    string

En este ejemplo, extraemos el primer elemento de la matriz de skills y lo asignamos a la variable de skill.

Dado que un elemento de una matriz de cadenas es una cadena, TypeScript infiere el tipo skill skill a string como se muestra en la salida.

## Propiedades y métodos de la matriz TypeScript

Las matrices de TypeScript pueden acceder a las propiedades y métodos de JavaScript. Por ejemplo, lo siguiente utiliza la propiedad length para obtener el número de elementos de una matriz:

    let series = [1, 2, 3];
    console.log(series.length); // 3

Y puede usar todos los métodos de matriz útiles, como forEach()(), map(), reduce()() y filter(). map() Por ejemplo:

    let series = [1, 2, 3];
    let doubleIt = series.map(e => e* 2);
    console.log(doubleIt);

Salida:

    [ 2, 4, 6 ]

## Almacenamiento de valores de tipos mixtos

A continuación se muestra cómo declarar una matriz que contiene cadenas y números:

    let scores = ['Programming', 5, 'Software Design', 4];

En este caso, TypeScript infiere la matriz de scores como una matriz de string | number.

Es equivalente a lo siguiente:

    let scores : (string | number)[];
    scores = ['Programming', 5, 'Software Design', 4];

## Resumen

- En TypeScript, una matriz es una lista ordenada de valores. Una matriz puede almacenar un tipo mixto de valores.

- Para declarar una matriz de un tipo específico, utilice la sintaxis let arr: type[]
