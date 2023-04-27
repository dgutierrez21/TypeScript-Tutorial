# Clases genéricas de TypeScript

Las clases genéricas en TypeScript te permiten crear clases que trabajan con una variedad de tipos de datos mientras mantienen la seguridad de tipos. La idea principal detrás de las clases genéricas es proporcionar una forma de crear componentes reutilizables que funcionen con diferentes tipos, sin la necesidad de un moldeado de tipos explícito o una comprobación de tipos en tiempo de ejecución.

## Introducción a las clases genéricas de TypeScript

Una clase genérica tiene una lista de parámetros de tipo genérico en un <> de corchetes angulares que sigue al nombre de la clase:

    class className<T>{
        //...
    }

TypeScript permite tener varios tipos genéricos en la lista de parámetros de tipo. Por ejemplo:

    class className<K,T>{
        //...
    }

Las restricciones genéricas también se aplican a los tipos genéricos de la clase:

    class className<T extends TypeA>{
        //...
    }

Colocar el parámetro type en la clase permite desarrollar métodos y propiedades que funcionan con el mismo tipo.

## Ejemplo de clases genéricas de TypeScript

En este ejemplo, desarrollaremos una clase Stack genérica.

Una pila es una estructura de datos que funciona según el principio de último en entrar, primero en salir (o LIFO). Significa que el primer elemento que coloca en la pila es el último elemento que puede obtener de la pila.

Normalmente, una pila tiene un tamaño. De forma predeterminada, está vacío. La pila tiene dos operaciones principales:

- Push: empuja un elemento en la pila.

- Pop: saca un elemento de la pila.

A continuación se muestra una clase Stack genérica completa denominada Stack<T>:

    class Stack<T> {
        private elements: T[] = [];

        constructor(private size: number) {
        }
        isEmpty(): boolean {
            return this.elements.length === 0;
        }
        isFull(): boolean {
            return this.elements.length === this.size;
        }
        push(element: T): void {
            if (this.elements.length === this.size) {
                throw new Error('The stack is overflow!');
            }
            this.elements.push(element);

        }
        pop(): T {
            if (this.elements.length == 0) {
                throw new Error('The stack is empty!');
            }
            return this.elements.pop();
        }
    }

Lo siguiente crea una nueva pila de números:

let numbers = new Stack<number>(5);

Esta función devuelve un número aleatorio entre dos números, low y high:

    function randBetween(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

Ahora, puede usar la función randBetween() para generar números aleatorios para ingresar a la pila de numbers:

    let numbers = new Stack<number>(5);

    while (!numbers.isFull()) {
        let n = randBetween(1, 10);
        console.log(`Push ${n} into the stack.`)
        numbers.push(n);
    }

Salida:

    Push 3 into the stack.
    Push 2 into the stack.
    Push 1 into the stack.
    Push 8 into the stack.
    Push 9 into the stack.

A continuación se muestra cómo sacar elementos de la pila hasta que esté vacía:

    while (!numbers.isEmpty()) {
        let n = numbers.pop();
        console.log(`Pop ${n} from the stack.`);
    }

Salida:

    Pop 9 from the stack.
    Pop 8 from the stack.
    Pop 1 from the stack.
    Pop 2 from the stack.
    Pop 3 from the stack.

Del mismo modo, puede crear una pila de cadenas. Por ejemplo:

    let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

    let wordStack = new Stack<string>(words.length);

    // push words into the stack
    words.forEach(word => wordStack.push(word));

    // pop words from the stack
    while (!wordStack.isEmpty()) {
        console.log(wordStack.pop());
    }

Cómo funciona:

- Primero, divide las oraciones en palabras.

- En segundo lugar, cree una pila cuyo tamaño sea igual al número de palabras de la matriz de palabras.

- En tercer lugar, empuje los elementos de la matriz de palabras en la pila.

- Finalmente, saca palabras de la pila hasta que esté vacía.
  En este tutorial, ha aprendido a desarrollar clases genéricas en TypeScript.
