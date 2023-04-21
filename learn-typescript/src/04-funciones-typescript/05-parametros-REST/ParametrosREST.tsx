function obtenerTotal(...numeros: number[]): number {
  let total = 0;
  numeros.forEach((num) => (total += num));
  return total;
}

console.log(obtenerTotal(10, 20, 30));

function nombreCompleto(nombre: string, ...resNombre: string[]): string {
  const nombreCompleto = `${nombre} ${resNombre.join(" ")}`;

  return nombreCompleto;
}

console.log(nombreCompleto("Steve", "Paul", "Jobs"));

export const ParametrosREST = () => {
  return <div>ParametrosREST</div>;
};
