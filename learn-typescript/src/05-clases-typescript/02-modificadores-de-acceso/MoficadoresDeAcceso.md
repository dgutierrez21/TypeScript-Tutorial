# Modificadores de acceso de TypeScript

**Resumen**: en este tutorial, aprenderá sobre los modificadores de acceso en TypeScript.

Los modificadores de acceso cambian la visibilidad de las propiedades y métodos de una clase. TypeScript proporciona tres modificadores de acceso:

- privado

- protegido

- público

Tenga en cuenta que TypeScript controla el acceso lógicamente durante el tiempo de compilación, no en tiempo de ejecución.

## El modificador privado

El modificador private limita la visibilidad sólo a la misma clase. Cuando agrega el modificador private a una propiedad o método, puede tener acceso a esa propiedad o método dentro de la misma clase. Cualquier intento de acceder a propiedades privadas o métodos fuera de la clase dará lugar a un error en tiempo de compilación.

En el ejemplo siguiente se muestra cómo utilizar el modificador private para las propiedades snn, firstName de la clase person:lastName

class Person {
private ssn: string;
private firstName: string;
private lastName: string;
// ...
}

Una vez que la propiedad private está en su lugar, puede tener acceso a la propiedad ssn en el constructor o métodos de la clase Person. Por ejemplo:

    class Person {
        private ssn: string;
        private firstName: string;
        private lastName: string;

        constructor(ssn: string, firstName: string, lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

Los siguientes intentos de acceso a la propiedad ssn fuera de la clase:

    let person = new Person('153-07-3130', 'John', 'Doe');
    console.log(person.ssn); // compile error

## El modificador público

El modificador public permite que las propiedades y los métodos de clase sean accesibles desde todas las ubicaciones. Si no especifica ningún modificador de acceso para propiedades y métodos, tomarán el modificador público de forma predeterminada.

Por ejemplo, el método getFullName() de la clase Person tiene el modificador public. A continuación se agrega explícitamente el modificador public al método getFullName()

    class Person {
        // ...
        public getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        // ...
    }

Tiene el mismo efecto que si se omitiera la palabra clave public.

## El modificador protegido

El modificador protected permite que las propiedades y métodos de una clase sean accesibles dentro de la misma clase y dentro de las subclases.

Cuando una clase (clase secundaria) hereda de otra clase (clase padre), es una subclase de la clase padre.

El compilador de TypeScript emitirá un error si intenta tener acceso a las propiedades o métodos protegidos desde cualquier otro lugar.

Para agregar el modificador protegido a una propiedad o un método, utilice la palabra clave protected. Por ejemplo:

    class Person {

        protected ssn: string;

        // other code
    }

La propiedad ssn ahora está protegida. Será accesible dentro de la clase Person Person y en cualquier clase que herede de la clase Person. Aprenderá más sobre la herencia aquí.

La clase Person declara las dos propiedades privadas y una propiedad protegida. Su constructor inicializa estas propiedades en tres argumentos.

Para acortar el código, TypeScript permite declarar propiedades e inicializarlas en el constructor de esta manera:

    class Person {
        constructor(protected ssn: string, private firstName: string, private lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

Cuando se considera la visibilidad de las propiedades y los métodos, se recomienda comenzar con el modificador de acceso menos visible, que es privado.

# Resumen

- TypeScript proporciona tres modificadores de acceso a las propiedades y métodos de clase: private, protected y public.

- El modificador private permite el acceso dentro de la misma clase.

- El modificador protected permite el acceso dentro de la misma clase y subclases.

- El modificador public permite el acceso desde cualquier ubicación.
