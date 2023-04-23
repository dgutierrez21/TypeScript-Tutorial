interface Correo {
  enviar(email: string): boolean;
  cola(email: string): boolean;
}

// muchas clases que ya implementaron "Correo";
// -----------
// muchas clases que ya implementaron "Correo";

// agregar nuevo método

interface CorreoFuturo extends Correo {
  masTarde(email: string, after: number): boolean;
}

// ejemplo 2

interface A {
  a(): void;
}

interface B extends A {
  b(): void;
}

// A continuación se muestra cómo implementar la interfaz Correo:

class Mail implements CorreoFuturo {
  masTarde(email: string, after: number): boolean {
    console.log(`Enviar correo a ${email} en ${after} ms.`);
    return true;
  }

  enviar(email: string): boolean {
    console.log(`Enviar correo a ${email} `);
    return true;
  }

  cola(email: string): boolean {
    console.log(`Añadir email para ${email} a la cola.`);
    return true;
  }
}

const nuevoEmail = new Mail();

console.log(nuevoEmail.enviar("example@correo.com"));

// Interfaces que amplían múltiples interfaces

interface C {
  c(): string;
}

interface D {
  d(): string;
}

interface E extends C, D {
  e(): string;
}

class CDB implements E {
  c(): string {
    return "C";
  }

  d(): string {
    return "D";
  }

  e(): string {
    return "E";
  }
}

const nuevoCBD = new CDB();

console.log(nuevoCBD.d());

// Interfaces que amplían clases

class Control {
  constructor(private estado: boolean) {}
}

interface EstadoFulControl extends Control {
  activar(): void;
}

class Button extends Control implements EstadoFulControl {
  activar(): void {}
}

class CajaDeTexto extends Control implements EstadoFulControl {
  activar(): void {}
}

class Label extends Control {}

class Chart implements EstadoFulControl {
  activar(): void {}
} // Error - La propiedad "estado" falta en el tipo "Chart", pero es obligatoria en el tipo "EstadoFulControl"

export const ExtenderInterfaces = () => {
  return <div>ExtenderInterfaces</div>;
};
