# Tuple TypeScript

Resumen: en este tutorial, aprenderá sobre el tipo de tupla TypeScript y sus usos.

## Introducción al tipo de tupla TypeScript

Una tupla funciona como una matriz con algunas consideraciones adicionales:

- El número de elementos en la tupla es fijo.

- Los tipos de elementos son conocidos y no tienen por qué ser los mismos.

Por ejemplo, puede usar una tupla para representar un valor como un par de una string y un number:

    let skill: [string, number];
    skill = ['Programming', 5];

El orden de los valores en una tupla es importante. Si cambia el orden de los valores de la tupla de skill a [5, "Programming"] obtendrá un error:

    let skill: [string, number];
    skill = [5, 'Programming'];

Error:

    error TS2322: Type 'string' is not assignable to type 'number'.

Por esta razón, es una buena práctica usar tuplas con datos que están relacionados entre sí en un orden específico.

Por ejemplo, puede usar una tupla para definir un color RGB que siempre viene en un patrón de tres números:

    (r,g,b)

Por ejemplo:

    let color: [number, number, number] = [255, 0, 0];

El color[0], color[1] color[1] y color[2] se asignarían lógicamente a los valores de color[0] Red, Green y Blue.

## Elementos de tupla opcionales

Desde TypeScript 3.0, una tupla puede tener elementos opcionales especificados mediante el postfijo de signo de interrogación (?).

Por ejemplo, puede definir una tupla RGBA con el valor de canal alfa opcional:

    let bgColor, headerColor: [number, number, number, number?];
    bgColor = [0, 255, 255, 0.5];
    headerColor = [0, 255, 255];

Tenga en cuenta que el RGBA define los colores utilizando el modelo rojo, verde, azul y alfa. El alfa especifica la opacidad del color.

## Resumen

- Un tupple es una matriz con un número fijo de elementos cuyos tipos son conocidos.
