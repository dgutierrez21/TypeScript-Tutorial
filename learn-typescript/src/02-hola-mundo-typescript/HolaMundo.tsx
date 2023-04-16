let mensaje: string = "Hola Mundo";

mensaje = 12; //  El tipo 'number' no se puede asignar al tipo 'string'.

console.log(mensaje);

export const HolaMundo = () => {
  return <h1>{mensaje}</h1>;
};
