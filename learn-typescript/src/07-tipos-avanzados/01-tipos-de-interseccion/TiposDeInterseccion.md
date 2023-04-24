# Tipos de intersección de TypeScript

**Resumen**: en este tutorial, aprenderá sobre la intersección de TypeScript
Tipos.

## Introducción a los tipos de intersección de TypeScript

Un tipo de intersección crea un nuevo tipo combinando varios tipos existentes. El nuevo tipo tiene todas las características de los tipos existentes.

Para combinar tipos, utilice el operador & de la siguiente manera:

    type typeAB = typeA & typeB;

El typeAB tendrá todas las propiedades de typeA y typeB.

Tenga en cuenta que el tipo de unión utiliza el operador | que define una variable que puede contener un valor de tipo typeA o typeB

    let varName = typeA | typeB; // union type

Supongamos que tiene tres interfaces: BusinessPartner, Identity y Contact.

    interface BusinessPartner {
        name: string;
        credit: number;
    }

    interface Identity {
        id: number;
        name: string;
    }

    interface Contact {
        email: string;
        phone: string;
    }

A continuación se definen dos tipos de intersección:

    type Employee = Identity & Contact;
    type Customer = BusinessPartner & Contact;

El tipo Employee contiene todas las propiedades del tipo Identity y Contact:

type Employee = Identity & Contact;

    let e: Employee = {
        id: 100,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '(408)-897-5684'
    };

Y el tipo Customer contiene todas las propiedades del tipo BusinessPartner y Contact:

    type Customer = BusinessPartner & Contact;

    let c: Customer = {
        name: 'ABC Inc.',
        credit: 1000000,
        email: 'sales@abcinc.com',
        phone: '(408)-897-5735'
    };

Más adelante, si desea implementar ventas de empleados, puede crear un nuevo tipo de intersección que contenga todas las propiedades de los tipos Identity, Contact y BusinessPartner:

    type Employee = Identity & BusinessPartner & Contact;

    let e: Employee = {
        id: 100,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '(408)-897-5684',
        credit: 1000
    };

Observe que tanto BusinessPartner como Identity tienen el name de propiedad con el mismo tipo. Si no lo hacen, entonces tendrá un error.

## Tipo Orden

Cuando se cruzan tipos, el orden de los tipos no importa. Por ejemplo:

    type typeAB = typeA & typeB;
    type typeBA = typeB & typeA;

En este ejemplo, typeAB y typeBA tienen las mismas propiedades.

# Resumen

- Un tipo de intersección combina dos o más tipos para crear un nuevo tipo que tiene todas las propiedades de los tipos existentes.

- El orden de tipos no es importante cuando se combinan tipos.
