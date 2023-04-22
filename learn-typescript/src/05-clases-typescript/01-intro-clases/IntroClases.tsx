class Persona {
  #nombre: string;
  #apellido: string;
  #edad: number;

  constructor(nombre: string, apellido: string, edad: number) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#edad = edad;
  }

  obtenerNombreCompleto(): string {
    return `${this.#nombre} ${this.#apellido}`;
  }
}

// const persona1 = new Persona(34, "Pedro", "Perez"); //Error - No se puede asignar un argumento de tipo "number" al parámetro de tipo "string".ts(2345)

// const persona1 = new Persona("Pedro", "Perez"); // Error - Se esperaban 3 argumentos, pero se obtuvieron 2.ts(2554)

const persona1 = new Persona("Pedro", "Perez", 34);

console.log(persona1.obtenerNombreCompleto());

console.log();

export const IntroClases = () => {
  return <div>IntroClases</div>;
};
