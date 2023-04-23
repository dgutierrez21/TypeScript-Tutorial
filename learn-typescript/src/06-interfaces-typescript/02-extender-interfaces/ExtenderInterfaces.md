# Cómo extender interfaces en TypeScript

**Resumen**: en este tutorial, aprenderá cómo extender una interfaz que le permite copiar propiedades y métodos de una interfaz a otra.

## Interfaces que amplían una interfaz

Supongamos que tiene una interfaz llamada Mailable que contiene dos métodos llamados send()() y queue() de la siguiente manera:

    interface Mailable {
        send(email: string): boolean
        queue(email: string): boolean
    }

Y tiene muchas clases que ya implementaron la interfaz Mailable.

Ahora, desea agregar un nuevo método a la interfaz Mailable que envía un correo electrónico más tarde como este:

    later(email: string, after: number): void

Sin embargo, agregar el método later() a la interfaz Mailable rompería el código actual.

Para evitar esto, puede crear una nueva interfaz que amplíe la interfaz Mailable:

    interface FutureMailable extends Mailable {
        later(email: string, after: number): boolean
    }

Para extender una interfaz, utilice la palabra clave extends con la sintaxis siguiente:

    interface A {
        a(): void
    }

    interface B extends A {
        b(): void
    }

La interfaz B extiende la interfaz A, que entonces tiene los métodos a()() y b() .

Al igual que las clases, la interfaz FutureMailable hereda los métodos send()() y queue() de la interfaz Mailable.

A continuación se muestra cómo implementar la interfaz FutureMailable:

    class Mail implements FutureMailable {
        later(email: string, after: number): boolean {
            console.log(`Send email to ${email} in ${after} ms.`);
            return true;
        }
        send(email: string): boolean {
            console.log(`Sent email to ${email} after ${after} ms. `);
            return true;
        }
        queue(email: string): boolean {
            console.log(`Queue an email to ${email}.`);
            return true;
        }
    }

Interfaces que amplían múltiples interfaces
Una interfaz puede extender múltiples interfaces, creando una combinación de todas las interfaces. Por ejemplo:

    interface C {
        c(): void
    }

    interface D extends B, C {
        d(): void
    }

En este ejemplo, la interfaz D extiende las interfaces B y C. Entonces D tiene todos los métodos de las interfaces B y C, que son a()(), b() y c()

## Interfaces que amplían clases

TypeScript permite que una interfaz amplíe una clase. En este caso, la interfaz hereda las propiedades y métodos de la clase. Además, la interfaz puede heredar los miembros privados y protegidos de la clase, no solo los miembros públicos.

Esto significa que cuando una interfaz extiende una clase con miembros privados o protegidos, la interfaz sólo puede ser implementada por esa clase o subclases de esa clase desde la que se extiende la interfaz.

Al hacer esto, restringe el uso de la interfaz a solo clase o subclases de la clase desde la que se extiende la interfaz. Si intenta implementar la interfaz desde una clase que no es una subclase de la clase que heredó la interfaz, obtendrá un error. Por ejemplo:

    class Control {
        private state: boolean;
    }

    interface StatefulControl extends Control {
        enable(): void
    }

    class Button extends Control implements StatefulControl {
        enable() { }
    }
    class TextBox extends Control implements StatefulControl {
        enable() { }
    }
    class Label extends Control { }


    // Error: cannot implement
    class Chart implements StatefulControl {
        enable() { }

    }

# Resumen

- Una interfaz puede ampliar una o varias interfaces existentes.

- Una interfaz también puede extender una clase. Si la clase contiene miembros privados o protegidos, la interfaz sólo puede ser implementada por la clase o subclases de esa clase.
