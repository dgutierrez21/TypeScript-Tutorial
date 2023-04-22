class Person {
  readonly diaCumpleanios: Date;

  constructor(diaCumpleanios: Date) {
    this.diaCumpleanios = diaCumpleanios;
  }
}

const persona1 = new Person(new Date(1995, 12, 25));

persona1.diaCumpleanios = new Date(2004, 7, 3); //Error - No se puede asignar a "diaCumpleanios" porque es una propiedad de solo lectura.

console.log(persona1.diaCumpleanios);
export const SoloLectura = () => {
  return <div>soloLectura</div>;
};
