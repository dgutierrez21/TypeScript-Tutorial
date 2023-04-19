# Alias de tipo TypeScript

Resumen: en este tutorial, aprenderá a definir nuevos nombres para tipos mediante alias de tipo.

## Introducción a los alias de tipo TypeScript

Los alias de tipo permiten crear un nuevo nombre para un tipo existente. A continuación se muestra la sintaxis del alias de tipo:

    type alias = existingType;

El tipo existente puede ser cualquier tipo TypeScript válido.

En el ejemplo siguiente se utiliza el alias de tipo chars para el tipo de cadena:

    type chars = string;
    let messsage: chars; // same as string type

Es útil crear alias de tipo para tipos de unión. Por ejemplo:

    type alphanumeric = string | number;
    let input: alphanumeric;
    input = 100; // valid
    input = 'Hi'; // valid
    input = false; // Compiler error

## Resumen

- Utilice alias de tipo para definir nuevos nombres para los tipos existentes.
