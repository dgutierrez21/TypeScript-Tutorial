# Descripción de las anotaciones de tipo en TypeScript

## Qué es la anotación de tipos en TypeScript

TypeScript utiliza anotaciones de tipo para especificar explícitamente tipos para identificadores como variables, funciones, objetos, etc.

TypeScript utiliza la sintaxis **: type** después de un identificador como anotación de tipo, donde **type** puede ser cualquier tipo válido.

Una vez que un identificador se anota con un tipo, se puede usar solo como ese tipo. Si el identificador se utiliza como un tipo diferente, el compilador de TypeScript emitirá un error

## Escribir anotaciones en variables y constantes

La sintaxis siguiente muestra cómo especificar anotaciones de tipo para variables y constantes:

    let variableName: type;
    let variableName: type = value;
    const constantName: type = value;

En esta sintaxis, la anotación de tipo viene después del nombre de la variable o constante y está precedida por dos puntos (:).

En el ejemplo siguiente se utiliza la anotación number para una variable:

    let counter: number;

Después de esto, solo puede asignar un número a la variable counter:

counter = 1;
Si asigna una cadena a la variable counter, obtendrá un error:

    let counter: number;
    counter = 'Hello'; // compile error

Error:

    Type '"Hello"' is not assignable to type 'number'.

Puede utilizar una anotación de tipo para una variable e inicializarla en una sola instrucción como esta:

    let counter: number = 1;

En este ejemplo, usamos la anotación numérica para la variable counter y la inicializamos en uno.

A continuación se muestran otros ejemplos de anotaciones de tipo primitivo:

    let name: string = 'John';
    let age: number = 25;
    let active: boolean = true;

En este ejemplo, la variable name obtiene el tipo de string, la variable age obtiene el tipo number y la variable active obtiene el tipo boolean.

## Ejemplos de anotación de tipos

### Matrices

Para anotar un tipo de matriz que utilice, utilice un tipo específico seguido de un corchete : type[] :

    let arrayName: type[];

Por ejemplo, a continuación se declara una matriz de cadenas:

    let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

### Objetos

Para especificar un tipo para un objeto, utilice la anotación de tipo de objeto. Por ejemplo:

    let person: {
       name: string;
       age: number
    };

person = {
name: 'John',
age: 25
}; // valid

En este ejemplo, el objeto person sólo acepta un objeto que tiene dos propiedades: name con el tipo de string y age number number.

### Argumentos de función y tipos de retorno

A continuación se muestra una anotación de función con anotación de tipo de parámetro y anotación de tipo de retorno:

    let greeting : (name: string) => string;

En este ejemplo, puede asignar cualquier función que acepte una cadena y devuelva una cadena a la variable greeting:

    greeting = function (name: string) {
        return `Hi ${name}`;
    };

Lo siguiente provoca un error porque la función asignada a la variable de greeting no coincide con su tipo de función.

    greeting = function () {
        console.log('Hello');
    };

Error:

    Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.

## Resumen

Utilice anotaciones de tipo con la sintaxis : [type] para especificar explícitamente un tipo para una variable, función, valor devuelto de función, etc.
