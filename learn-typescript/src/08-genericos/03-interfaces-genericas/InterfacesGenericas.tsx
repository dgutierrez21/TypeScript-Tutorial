interface Par<K, V> {
  key: K;
  valor: V;
}

const mes: Par<string, Number> = {
  key: "Enero",
  valor: 1,
};

console.log(mes);

// Interfaces genéricas que describen métodos

interface Coleccion<T> {
  aniadir(a: T): void;
  eliminar(a: T): void;
}

class Lista<T> implements Coleccion<T> {
  private elementos: T[] = [];

  aniadir(a: T): void {
    this.elementos.push(a);
  }

  eliminar(a: T): void {
    const index = this.elementos.indexOf(a);
    if (index > -1) {
      this.elementos.splice(index, 1);
    }
  }
}

const lista = new Lista<number>();

for (let i = 0; i < 10; i++) {
  lista.aniadir(i);
}

console.log(lista);

lista.eliminar(2);

console.log(lista);

// Interfaces genéricas que describen tipos de índice

interface Opciones<T> {
  [nombre: string]: T;
}

let inputOpciones: Opciones<boolean> = {
  deshabilitado: false,
  Habilitado: true,
};

console.log(inputOpciones);

export const InterfacesGenericas = () => {
  return <div>InterfacesGenericas</div>;
};
