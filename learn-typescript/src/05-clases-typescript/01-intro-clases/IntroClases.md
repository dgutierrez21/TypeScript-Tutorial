# TypeScript Clase

**Resumen**: en este tutorial, aprenderá sobre la clase TypeScript.

## Introducción a la clase TypeScript

JavaScript no tiene un concepto de clase como otros lenguajes de programación como Java y C #. En ES5, puede utilizar una función constructora y una herencia de prototipos para crear una "clase".

Por ejemplo, para crear una clase Person que tenga tres propiedades ssn, nombre y apellido, utilice la siguiente función constructora:

    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

A continuación, puede definir un método prototipo para obtener el nombre completo de la persona concatenando el nombre y el apellido de esta manera:

    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }

A continuación, puede utilizar la "clase" Persona creando un nuevo objeto:

    let person = new Person('171-28-0926','John','Doe');
    console.log(person.getFullName());

Enviaría lo siguiente a la consola:

    John Doe

ES6 le permitió definir una clase que es simplemente azúcar sintáctico para crear una función constructora y una herencia prototípica:

    class Person {
        ssn;
        firstName;
        lastName;

        constructor(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

En la sintaxis de la clase, el constructor está claramente definido y colocado dentro de la clase. Lo siguiente agrega el método getFullName()

    class Person {
        ssn;
        firstName;
        lastName;

        constructor(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

El uso de la clase Person es lo mismo que la función constructora Person:

    let person = new Person('171-28-0926','John','Doe');
    console.log(person.getFullName());

La clase TypeScript agrega anotaciones de tipo a las propiedades y métodos de la clase. A continuación se muestra la clase Person en TypeScript:

    class Person {
        ssn: string;
        firstName: string;
        lastName: string;

        constructor(ssn: string, firstName: string, lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

Al anotar tipos en propiedades, constructor y método, el compilador TypeScript llevará las comprobaciones de tipo correspondientes.

Por ejemplo, no puede inicializar el ssn con un number. El código siguiente producirá un error:

    let person = new Person(171280926, 'John', 'Doe');

## Resumen

- Utilice la palabra clave class para definir una clase en TypeScript.

- TypeScript aprovecha la sintaxis de la clase ES6 y agrega anotaciones de tipo para hacer que la clase sea más sólida.
