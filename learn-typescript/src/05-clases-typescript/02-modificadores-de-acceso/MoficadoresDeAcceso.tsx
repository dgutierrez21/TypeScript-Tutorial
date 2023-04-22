class Persona {
  // El modificador privado
  private nombre: string;
  private apellido: string;
  protected edad: number;

  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  // El modificador protegido
  protected obtenerNombreCompleto(): string {
    return this.nombre + " " + this.apellido;
  }

  // El modificador público
  public mensajeEdad(): string {
    return `La edad de ${this.nombre} ${this.apellido} es ${this.edad} años`;
  }
}

const persona1 = new Persona("Pedro", "Perez", 25);

console.log(persona1.nombre); //Error - La propiedad 'nombre' es privada y solo se puede acceder a ella en la clase 'Persona

console.log(persona1.mensajeEdad()); // valid

class Profesor extends Persona {
  private materia: string;

  constructor(nombre: string, apellido: string, edad: number, materia: string) {
    super(nombre, apellido, edad);
    this.materia = materia;
  }

  presentarse(): string {
    return `${this.obtenerNombreCompleto()} es profesor de ${
      this.materia
    } y tiene ${this.edad} años.`;
  }
}

const profesor1 = new Profesor("Alex", "Perez", 40, "Inglés");

console.log(profesor1.presentarse()); // valid

export const MoficadoresDeAcceso = () => {
  return <div>MoficadoresDeAcceso</div>;
};
