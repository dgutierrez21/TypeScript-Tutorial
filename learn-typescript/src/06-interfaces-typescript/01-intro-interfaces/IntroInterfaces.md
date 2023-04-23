# TypeScript Interfaz

**Resumen**: en este tutorial, aprenderá acerca de las interfaces de TypeScript y cómo usarlas para aplicar la comprobación de tipos.

## Introducción a las interfaces de TypeScript

Las interfaces de TypeScript definen los contratos dentro del código. También proporcionan nombres explícitos para la comprobación de tipos.

Las interfaces son una forma de definir la estructura de un objeto. Una interfaz describe la forma de un objeto, especificando qué propiedades y métodos debe tener. Las interfaces se utilizan para definir tipos personalizados en TypeScript y para proporcionar una forma de definir la forma de un objeto sin necesidad de crear una clase.

Comencemos con un ejemplo simple:

    function getFullName(person: {
        firstName: string;
        lastName: string
    }) {
        return `${person.firstName} ${person.lastName}`;
    }

    let person = {
        firstName: 'John',
        lastName: 'Doe'
    };

    console.log(getFullName(person));

Salida:

    John Doe

En este ejemplo, el compilador de TypeScript comprueba el argumento que se pasa a la función getFullName().

Si el argumento tiene dos propiedades cuyos tipos son cadena, el compilador de TypeScript pasa la comprobación. De lo contrario, emitirá un error.

Como puede ver claramente en el código, la anotación de tipo del argumento de la función hace que el código sea difícil de leer.

Para resolver esto, TypeScript introduce el concepto de interfaces.

Lo siguiente utiliza una interfaz denominada Person que tiene dos propiedades de cadena:

    interface Person {
    firstName: string;
    lastName: string;
    }

Por convención, los nombres de interfaz están en el caso del camello. Usan una sola letra mayúscula para separar las palabras en sus nombres. Por ejemplo, Person, UserProfile y FullName.

Después de definir la interfaz Person, puede usarla como un tipo. Y puede anotar el parámetro de función con el nombre de la interfaz:

    function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
    }

    let john = {
    firstName: 'John',
    lastName: 'Doe'
    };

    console.log(getFullName(john));

El código ahora es más fácil de leer que antes.

La función getFullName() aceptará cualquier argumento que tenga dos propiedades de cadena. Y no tiene que tener exactamente dos propiedades de cadena. Vea el siguiente ejemplo:

El código siguiente declara un objeto que tiene cuatro propiedades:

    let jane = {
    firstName: 'Jane',
    middleName: 'K.'
    lastName: 'Doe',
    age: 22
    };

Dado que el objeto jane tiene dos propiedades de cadena firstName y lastName, puede pasarlo a la función getFullName() de la siguiente manera:

    let fullName = getFullName(jane);
    console.log(fullName); // Jane Doe

## Propiedades opcionales

Una interfaz puede tener propiedades opcionales. Para declarar una propiedad opcional, utilice el signo de interrogación (?) al final del nombre de la propiedad en la declaración, de la siguiente manera:

    interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
    }

En este ejemplo, la interfaz Person tiene dos propiedades obligatorias y una propiedad opcional.

Y lo siguiente muestra cómo usar la interfaz Person en la función getFullName()

    function getFullName(person: Person) {
    if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
    }

## Propiedades de solo lectura

Si las propiedades sólo deben modificarse cuando se crea el objeto por primera vez, puede utilizar la palabra clave readonly antes del nombre de la propiedad:

    interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;
    }

    let person: Person;
    person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
    }

En este ejemplo, la propiedad ssn no se puede cambiar:

    person.ssn = '171-28-0000';

Error:

    error TS2540: Cannot assign to 'ssn' because it is a read-only property.

## Tipos de funciones

Además de describir un objeto con propiedades, las interfaces también permiten describir tipos de funciones.

Para describir un tipo de función, asigne la interfaz a la firma de función que contiene la lista de parámetros con tipos y tipos devueltos. Por ejemplo:

    interface StringFormat {
    (str: string, isUpper: boolean): string
    }

Ahora, puede usar esta interfaz de tipo de función.

A continuación se muestra cómo declarar una variable de un tipo de función y asignarle un valor de función del mismo tipo:

    let format: StringFormat;

    format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
    };

    console.log(format('hi', true));

Salida:

    HI

Tenga en cuenta que no es necesario que los nombres de los parámetros coincidan con la firma de la función. El siguiente ejemplo es equivalente al ejemplo anterior:

    let format: StringFormat;

    format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
    };

    console.log(format('hi', true));

La interfaz StringFormat garantiza que todos los llamadores de la función que lo implementa pasen los argumentos requeridos: una string y un boolean.

El siguiente código también funciona perfectamente bien aunque el lowerCase está asignado a una función que no tiene el segundo argumento:

    let lowerCase: StringFormat;
    lowerCase = function (str: string) {
    return str.toLowerCase();
    }

    console.log(lowerCase('Hi', false));

Observe que el segundo argumento se pasa cuando se llama a la función lowerCase()

## Tipos de clase

una clase puede implementar una interfaz, lo que significa que la clase debe tener todas las propiedades y métodos definidos en la interfaz. Esto se hace utilizando la palabra clave implements seguida del nombre de la interfaz.

Si ha trabajado con Java o C #, puede encontrar que el uso principal de la interfaz es definir un contrato entre clases no relacionadas.

Por ejemplo, la siguiente interfaz Json puede ser implementada por cualquier clase no relacionada:

    interface Json {
    toJSON(): string
    }

A continuación se declara una clase que implementa la interfaz Json:

    class Person implements Json {
    constructor(private firstName: string,
    private lastName: string) {
    }
    toJson(): string {
    return JSON.stringify(this);
    }
    }

En la clase Person, implementamos el método toJson() de la interfaz Json.

En el ejemplo siguiente se muestra cómo utilizar la clase Person:

    let person = new Person('John', 'Doe');
    console.log(person.toJson());

Salida:

    {"firstName":"John","lastName":"Doe"}

# Resumen

- Las interfaces de TypeScript definen contratos en el código y proporcionan nombres explícitos para la comprobación de tipos.

- Las interfaces pueden tener propiedades opcionales o propiedades de sólo lectura.

- Las interfaces se pueden utilizar como tipos de funciones.

- Las interfaces se utilizan normalmente como tipos de clase que hacen un contrato entre clases no relacionadas.
