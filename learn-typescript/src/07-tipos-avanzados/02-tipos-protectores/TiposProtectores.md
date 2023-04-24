# Protecciones de tipos de TypeScript

**Resumen**: en este tutorial, aprenderá sobre Type Guard en TypeScript

Los protectores de tipo le permiten reducir el tipo de una variable dentro de un bloque condicional.

## typeof

Echemos un vistazo al siguiente ejemplo:

    type alphanumeric = string | number;

    function add(a: alphanumeric, b: alphanumeric) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }

        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }

        throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
    }

Cómo funciona:

- Primero, alphanumeric que puede contener una cadena o un número.

- A continuación, declare una función que agregue a y b con el tipo de alphanumeric.

- A continuación, compruebe si ambos tipos de argumentos son números utilizando el typeof. En caso afirmativo, calcule la suma de argumentos utilizando el operador +.

- Después de eso, verifique si ambos tipos de argumentos son cadenas usando el operador typeof. En caso afirmativo, concatena dos argumentos.

- Finalmente, arroje un error si los argumentos no son ni números ni cadenas.

En este ejemplo, TypeScript conoce el uso del operador typeof en los bloques condicionales. Dentro del siguiente bloque if, TypeScript se da cuenta de que a y b son números.

    if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
    }

Del mismo modo, en el siguiente bloque if, TypeScript trata a y b como cadenas, por lo tanto, puede concatenarlas en una:

    if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
    }

instanciade
De forma similar al operador typeof, TypeScript también es consciente del uso del operador instanceof. Por ejemplo:

    class Customer {
    isCreditAllowed(): boolean {
    // ...
    return true;
    }
    }

    class Supplier {
    isInShortList(): boolean {
    // ...
    return true;
    }
    }

    type BusinessPartner = Customer | Supplier;

    function signContract(partner: BusinessPartner) : string {
    let message: string;

    if (partner instanceof Customer) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

        if (partner instanceof Supplier) {
            message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
        }

        return message;

    }

Cómo funciona:

- En primer lugar, declare las clases Customer y Supplier.

- En segundo lugar, cree un alias de tipo BusinessPartner que es un tipo de unión de Customer y Supplier.

- En tercer lugar, declare una función signContract() que acepte un parámetro con el tipo BusinessPartner.

- Finalmente, verifique si el socio es una instancia de Customer o Supplier, y luego proporcione la lógica respectiva.

Dentro del siguiente bloque if, TypeScript sabe que el socio es una instancia del tipo Customer debido al operador instanceof:

    if (partner instanceof Customer) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

Del mismo modo, TypeScript sabe que el socio es una instancia de Supplier dentro del siguiente bloque if:

    if (partner instanceof Supplier) {
    message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

Cuando un if reduce un tipo, TypeScript sabe que dentro del otro no es ese tipo sino el else. Por ejemplo:

    function signContract(partner: BusinessPartner) : string {
    let message: string;

    if (partner instanceof Customer) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
    // must be Supplier
    message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
    }

## in

El operador in realiza una comprobación segura de la existencia de una propiedad en un objeto. También se puede utilizar como guarda de tipo. Por ejemplo:

    function signContract(partner: BusinessPartner) : string {
    let message: string;

    if ('isCreditAllowed' in partner) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
    // must be Supplier
    message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
    }

## Protecciones de tipos definidas por el usuario

Los protectores de tipo definidos por el usuario permiten definir un protector de tipo o ayudan a TypeScript a inferir un tipo cuando se utiliza una función.

Una función de protección de tipo definida por el usuario es una función que simplemente devuelve arg is aType. Por ejemplo:

    function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
    }

En este ejemplo, isCustomer() es una función de protección de tipo definida por el usuario. Ahora puede usarlo de la siguiente manera:

    function signContract(partner: BusinessPartner): string {
    let message: string;

    if (isCustomer(partner)) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
    message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

        return message;

    }

# Resumen

- Los protectores de tipo reducen el tipo de una variable dentro de un bloque condicional.

- Usar los operadores typeof e instanceof para implementar protecciones de tipo en los bloques condicionales
