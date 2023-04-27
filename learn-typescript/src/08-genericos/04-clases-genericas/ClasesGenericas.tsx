class Pila<T> {
  private elementos: T[] = [];

  constructor(private tamanio: number) {
    this.tamanio = tamanio;
  }

  estaVacio(): boolean {
    return this.elementos.length === 0;
  }

  estaLleno(): boolean {
    return this.elementos.length === this.tamanio;
  }

  push(elemento: T): void {
    if (this.elementos.length === this.tamanio) {
      throw new Error("¡La pila está desbordada!");
    }

    this.elementos.push(elemento);
  }

  pop(): T {
    if (this.elementos.length == 0) {
      throw new Error("¡La pila está vacía!");
    }

    const elementoPopped = this.elementos.pop();

    if (elementoPopped === undefined) {
      throw new Error("¡Valor indefinido inesperado!");
    }

    return elementoPopped;
  }
}

function rangoEntre(bajo: number, alto: number): number {
  return Math.floor(Math.random() * (alto - bajo + 1) + bajo);
}

let numeros = new Pila<number>(5);

while (!numeros.estaLleno()) {
  let n = rangoEntre(1, 10);
  console.log(`Introducir ${n} en la pila`);
  numeros.push(n);
}

while (!numeros.estaVacio()) {
  let n = numeros.pop();
  console.log(`Sacar ${n} de la pila.`);
}

// Del mismo modo, puede crear una pila de cadenas. Por ejemplo:

const palabras = "El zorro marrón rápido salta sobre el perro perezoso".split(
  " "
);

const pilaDePalabras = new Pila<string>(palabras.length);

palabras.forEach((palabra) => {
  pilaDePalabras.push(palabra);

  console.log(`Introducir ${palabra} en la pila`);
});

while (!pilaDePalabras.estaVacio()) {
  let s = pilaDePalabras.pop();
  console.log(`sacar ${s} de la pila`);
}

export const ClasesGenericas = () => {
  return <div>ClasesGenericas</div>;
};
