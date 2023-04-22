# TypeScript de sólo lectura

**Resumen**: en este tutorial, aprenderá a usar el modificador de acceso de sólo lectura TypeScript para marcar las propiedades de clase como propiedades inmutables.

TypeScript proporciona el modificador readonly que permite marcar las propiedades de una clase inmutables. La asignación a una propiedad de sólo lectura sólo puede producirse en uno de estos dos lugares:

- En la declaración de propiedad.

- En el constructor de la misma clase.

Para marcar una propiedad como inmutable, utilice la palabra clave readonly. A continuación se muestra cómo declarar una propiedad de sólo lectura en la clase Person:

    class Person {
        readonly birthDate: Date;

        constructor(birthDate: Date) {
            this.birthDate = birthDate;
        }
    }

En este ejemplo, la propiedad birthdate es una propiedad readonly que se inicializa en el constructor de la clase Person.

Lo siguiente intenta reasignar la propiedad birthDate que produce un error:

let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error

Al igual que otros modificadores de acceso, puede consolidar la declaración y la inicialización de una propiedad readonly en el constructor de esta manera:

    class Person {
        constructor(readonly birthDate: Date) {
            this.birthDate = birthDate;
        }
    }

## Sólo lectura vs. const

A continuación se muestran las diferencias entre readonly y const:

|                | readonly                                                | const             |
| -------------- | ------------------------------------------------------- | ----------------- |
| Uso para       | Propiedades de clase                                    | Variables         |
| Inicialización | En la declaración o en el constructor de la misma clase | En la declaración |

# Resumen

- Utilice el modificador de acceso readonly para marcar una propiedad de clase como inmutable.

- Una propiedad readonly debe inicializarse como parte de la declaración o en el constructor de la misma clase.
