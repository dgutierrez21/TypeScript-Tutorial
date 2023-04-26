# Interfaces genéricas de TypeScript

**Resumen**: en este tutorial, aprenderá a desarrollar interfaces genéricas de TypeScript.

## Introducción a las interfaces genéricas de TypeScript

Al igual que las clases, las interfaces también pueden ser genéricas. Una interfaz genérica tiene una lista de parámetros de tipo genérico en un <> de corchetes angulares que sigue el nombre de la interfaz:

    interface interfaceName<T> {
        // ...
    }

Esto hace que el parámetro de tipo T sea visible para todos los miembros de la interfaz.

La lista de parámetros de tipo puede tener uno o varios tipos. Por ejemplo:

    interface interfaceName<U,V> {
        // ...
    }

## Ejemplos de interfaz genérica de TypeScript

Tomemos algunos ejemplos de declaración de interfaces genéricas.

## 1) Interfaces genéricas que describen las propiedades del objeto

A continuación se muestra cómo declarar una interfaz genérica que consta de dos miembros, clave y valor con los tipos correspondientes K y V:

    interface Pair<K, V> {
        key: K;
        value: V;
    }

Ahora, puede usar la interfaz Par para definir cualquier par clave/valor con cualquier tipo. Por ejemplo:

    let month: Pair<string, number> = {
        key: 'Jan',
        value: 1
    };

    console.log(month);

En este ejemplo, declaramos un par clave-valor mensual cuya clave es una cadena y el valor es un número.

## 2) Interfaces genéricas que describen métodos

A continuación se declara una interfaz genérica con dos métodos add() y remove():

    interface Collection<T> {
        add(o: T): void;
        remove(o: T): void;
    }

Y esta clase genérica List<T><T> implementa la interfaz genérica Collection<T>:

    class List<T> implements Collection<T>{
        private items: T[] = [];

        add(o: T): void {
            this.items.push(o);
        }
        remove(o: T): void {
            let index = this.items.indexOf(o);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        }
    }

Desde la clase List<T>, puede crear una lista de valores de varios tipos, por ejemplo, números o cadenas.

Por ejemplo, a continuación se muestra cómo utilizar la clase genérica List<T> para crear una lista de números:

    let list = new List<number>();

    for (let i = 0; i < 10; i++) {
        list.add(i);
    }

## 3) Interfaces genéricas que describen tipos de índice

A continuación se declara una interfaz que describe un tipo de índice:

    interface Options<T> {
        [name: string]: T
    }

    let inputOptions: Options<boolean> = {
        'disabled': false,
        'visible': true
    };
