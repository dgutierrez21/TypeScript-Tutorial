abstract class Empleado {
  constructor(private nombre: string, private apellido: string) {}

  abstract obtenerSalario(): number;

  get nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  declaracionIndemnizacion(): string {
    return `${this.nombreCompleto} hace ${this.obtenerSalario()} al día.`;
  }
}

const empleado1 = new Empleado(); // Error - No se puede crear una instancia de una clase abstracta.

class EmpleadoTiempoCompleto extends Empleado {
  constructor(nombre: string, apellido: string, private salario: number) {
    super(nombre, apellido);
  }

  obtenerSalario(): number {
    return this.salario;
  }
}

const empleado2 = new EmpleadoTiempoCompleto("Pedro", "Perez", 5000);

console.log(empleado2.nombreCompleto); // valid
console.log(empleado2.declaracionIndemnizacion()); // valid

console.log("***************");

// clase Contratista

class Contratista extends Empleado {
  constructor(
    nombre: string,
    apellido: string,
    private tarifa: number,
    private horas: number
  ) {
    super(nombre, apellido);
  }

  obtenerSalario(): number {
    return this.tarifa * this.horas;
  }
}

const empleado3 = new Contratista("Juan", "Lopez", 4000, 8);

console.log(empleado3.declaracionIndemnizacion());

const empleado4 = new Contratista("María", "Ruiz", 4500, 12);

console.log(empleado4.declaracionIndemnizacion());

export const ClasesAbstractas = () => {
  return <div>ClasesAbstractas</div>;
};
