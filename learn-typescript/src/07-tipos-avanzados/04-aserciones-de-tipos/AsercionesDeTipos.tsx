function obtenerPrecioNeto(
  precio: number,
  descuento: number,
  formato: boolean
): number | string {
  const precioNeto = precio - precio * (descuento / 100);

  return formato ? `$${precioNeto}` : precioNeto;
}

const precioNeto = obtenerPrecioNeto(34990, 10, true) as string;

console.log(precioNeto);

//La aserción de tipo se realiza utilizando la sintaxis as number, lo que indica que se está forzando que el valor de retorno de getNetPrice() sea de tipo number. Esto puede ser útil si se necesita que el valor de netPrice sea de tipo number para realizar operaciones posteriores.

const precioNeto2 = obtenerPrecioNeto(25000, 10, false) as number;

console.log(precioNeto2);

export const AsercionesDeTipos = () => {
  return <div>AsercionesDeTipos</div>;
};
