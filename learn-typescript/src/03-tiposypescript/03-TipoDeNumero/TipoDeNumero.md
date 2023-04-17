# Número de TypeScript

Resumen: en este tutorial, aprenderá sobre los tipos de datos numéricos de TypeScript.

Todos los números de TypeScript son valores de coma flotante o enteros grandes. Los números de coma flotante tienen el number de tipo, mientras que los enteros grandes obtienen el tipo bigint.

## El tipo de número

A continuación se muestra cómo declarar una variable que contiene un valor de coma flotante:

    let price: number;

O puede inicializar la variable de precio en un número:

    let price = 9.95;

Al igual que en JavaScript, TypeScript admite los literales numéricos para literales decimales, hexadecimales, binarios y octales:

## Números decimales

A continuación se muestran algunos números decimales:

    let counter: number = 0;
    let x: number = 100,
    y: number = 200;

## Números binarios

El número binario usa un cero inicial seguido de una letra minúscula o mayúscula "B", por ejemplo, 0b o 0B :

    let bin = 0b100;
    let anotherBin: number = 0B010;

Tenga en cuenta que el dígito después de 0b o 0B debe ser 0 o 1.

## Números octales

Un número octal usa un cero inicial seguido de la letra o (desde ES2015) 0o. Los dígitos después de 0o son números en el rango 0 al 7:

    let octal: number = 0o10;

## Números hexadecimales

Los números hexadecimales usan un cero inicial seguido de X minúscula o mayúscula (0x o 0X). Los dígitos después del 0x deben estar en el rango (0123456789ABCDEF Por ejemplo:

    let hexadecimal: number = 0XA;

JavaScript tiene el tipo Number (con la letra N en mayúsculas) que hace referencia al objeto en caja no primitivo. No debe utilizar este tipo Number tanto como sea posible en TypeScript.

## Enteros grandes

Los enteros grandes representan los números enteros mayores que 253 – 1. Un literal entero grande tiene el carácter n al final de un literal entero como este:

    let big: bigint = 9007199254740991n;

## Resumen

- Todos los números de TypeScript son valores de coma flotante que obtienen el tipo de número o enteros grandes que obtienen el tipo bigint.

- Evite usar el tipo Número tanto como sea posible.
