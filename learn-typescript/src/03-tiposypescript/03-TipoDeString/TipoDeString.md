# Cadena TypeScript

Resumen: en este tutorial, aprenderá sobre el tipo de datos de cadena TypeScript.

Al igual que JavaScript, TypeScript utiliza comillas dobles (") o comillas simples (') para rodear los literales de cadena:

    let firstName: string = 'John';
    let title: string = "Web Developer";

TypeScript también admite cadenas de plantilla que utilizan la marca de retroceso (') para rodear caracteres.

Las cadenas de plantilla permiten crear cadenas de varias líneas y proporcionar las características de interpolación de cadenas.

En el ejemplo siguiente se muestra cómo crear una cadena de varias líneas mediante la marca de retroceso ('):

    let description = `This TypeScript string can
    span multiple
    lines
    `;

Las interpolaciones de cadena le permiten incrustar las variables en la cadena de esta manera:

    let firstName: string = `John`;
    let title: string = `Web Developer`;
    let profile: string = `I'm ${firstName}.
    I'm a ${title}`;

    console.log(profile);

Salida:

    I'm John.
    I'm a Web Developer.

## Resumen

- En TypeScript, todas las cadenas obtienen el tipo de string.

- Al igual que JavaScript, TypeScript utiliza comillas dobles ("), comillas simples (') y backtick (') para rodear los literales de cadena.
