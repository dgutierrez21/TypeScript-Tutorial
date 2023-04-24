interface SocioComercial {
  nombre: string;
  credito: number;
}

interface Identidad {
  id: number;
  nombre: string;
}

interface Contacto {
  email: string;
  telefono: string;
}

type Empleado = Identidad & Contacto;
type Cliente = SocioComercial & Contacto;

// nota: el orden no importa

const empleado1: Empleado = {
  id: 100,
  nombre: "Pedro Perez",
  email: "pedro@correo.com",
  telefono: "000 000 000",
};

const cliente1: Cliente = {
  nombre: "Pablo Torres",
  credito: 5000,
  email: "pablo@correo.com",
  telefono: "111 222 333",
};

// si se desea implementar ventas de empleados, puede crear un nuevo tipo de intersección que contenga todas las propiedades.

type VentasEmpleados = Identidad & SocioComercial & Contacto;

let venta1: VentasEmpleados = {
  id: 100,
  nombre: "John Doe",
  email: "john.doe@example.com",
  telefono: "(408)-897-5684",
  credito: 1000,
};

export const TiposDeInterseccion = () => {
  return <div>TiposDeInterseccion</div>;
};
