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