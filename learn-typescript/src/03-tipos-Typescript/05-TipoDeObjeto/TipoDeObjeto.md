# Tipo de objeto TypeScript

Resumen: en este tutorial, aprenderá sobre el tipo de objeto TypeScript y cómo object escribir declaraciones de tipo object más precisas.

## Introducción al tipo de objeto TypeScript

El tipo de object TypeScript representa todos los valores que no están en tipos primitivos.

Los siguientes son tipos primitivos en TypeScript:

- number
- bigint
- string
- boolean
- null
- undefined
- symbol

A continuación se muestra cómo declarar una variable que contiene un objeto:

    let employee: object;

    employee = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer'
    };

    console.log(employee);

    Salida:

    {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      jobTitle: 'Web Developer'
    }

Si reasigna un valor primitivo al objeto employee, obtendrá un error:

    employee = "Jane";

Error:

    error TS2322: Type '"Jane"' is not assignable to type 'object'.

El objeto employee es un tipo de object con una lista fija de propiedades. Si intenta acceder a una propiedad que no existe en el objeto employee, obtendrá un error:

    console.log(employee.hireDate);

Error:

    error TS2339: Property 'hireDate' does not exist on type 'object'.

Tenga en cuenta que la declaración anterior funciona perfectamente bien en JavaScript y devuelve undefined en su lugar.

Para especificar explícitamente las propiedades del objeto employee, primero use la sintaxis siguiente para declarar el objeto employee:

    let employee: {
        firstName: string;
        lastName: string;
        age: number;
        jobTitle: string;
    };

Y, a continuación, asigne el objeto employee a un objeto literal con las propiedades descritas:

    employee = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer'
    };

O puede combinar ambas sintaxis en la misma instrucción de esta manera:

    let employee: {
        firstName: string;
        lastName: string;
        age: number;
        jobTitle: string;
    } = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer'
    };

## objeto frente a objeto

TypeScript tiene otro tipo llamado Object con la letra O en mayúsculas. Es importante entender las diferencias entre ellos.

El tipo de objeto representa todos los valores no primitivos, mientras que el tipo de object describe la funcionalidad Object todos los objetos.

Por ejemplo, el tipo Object tiene los métodos toString()() y valueOf() a los que puede tener acceso cualquier objeto.

## El tipo vacío {}

TypeScript tiene otro tipo llamado tipo vacío denotado por {} , que es bastante similar al tipo de objeto.

El tipo vacío {} describe un objeto que no tiene ninguna propiedad propia. Si intenta tener acceso a una propiedad en dicho objeto, TypeScript emitirá un error en tiempo de compilación:

    let vacant: {};
    vacant.firstName = 'John';

Error:

    error TS2339: Property 'firstName' does not exist on type '{}'.

Pero puede acceder a todas las propiedades y métodos declarados en el tipo de objeto, que está disponible en el objeto a través Object la cadena de prototipos:

    let vacant: {} = {};

    console.log(vacant.toString());

Salida:

    [object Object]

## Resumen

- El tipo de object TypeScript representa cualquier valor que no sea un valor primitivo.

- Sin embargo, el tipo Object describe la funcionalidad disponible en todos los objetos.

- El tipo vacío {} hace referencia a un objeto que no tiene ninguna propiedad propia.
