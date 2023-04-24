# Aserciones de tipo

**Resumen**: en este tutorial, aprenderá acerca de las aserciones de tipo en TypeScript.

## Introducción a las aserciones de tipo en TypeScript

Las aserciones de tipo indican al compilador de TypeScript que trate un valor como un tipo especificado. Utiliza la palabra clave as para hacerlo:

    expression as targetType

Una aserción de tipo también se conoce como estrechamiento de tipo. Le permite restringir un tipo de un tipo de unión. Veamos la siguiente función simple:

    function getNetPrice(price: number, discount: number, format: boolean): number | string {
        let netPrice = price * (1 - discount);
        return format ? `$${netPrice}` : netPrice;
    }

La función getNetPrice() acepta argumentos de price, discount y format y devuelve un valor del número de tipo de unión number | string.

Si el formato es true, getNetPrice() devuelve un precio neto con format como una cadena. De lo contrario, devuelve el precio neto como un número.

A continuación se utiliza la palabra clave as para indicar al compilador que el valor asignado a netPrice es una cadena:

    let netPrice = getNetPrice(100, 0.05, true) as string;
    console.log(netPrice);

Salida:

    $95

De forma similar, lo siguiente utiliza la palabra clave as para indicar al compilador que el valor devuelto de la función getNetPrice() es un número.

    let netPrice = getNetPrice(100, 0.05, false) as number;
    console.log(netPrice);

Salida:

    95

Tenga en cuenta que una aserción de tipo no lleva ninguna conversión de tipo. Sólo le dice al compilador qué tipo debe aplicar a un valor para fines de comprobación de tipos.

La sintaxis alternativa de la aserción de tipo
También puede usar la <> de sintaxis de corchete angular para afirmar un tipo, como este:

    <targetType> value

Por ejemplo:

    let netPrice = <number>getNetPrice(100, 0.05, false);

Tenga en cuenta que no puede utilizar la sintaxis de corchete angular <> con algunas bibliotecas como React. Por este motivo, debe usar la palabra clave as para las aserciones de tipo.

# Resumen

- Las aserciones de tipo indican al compilador que trate un valor como un tipo especificado.

- Las aserciones de tipo no llevan ninguna conversión de tipo.

- Las aserciones de tipo usan la palabra clave as o un corchete angular <> sintaxis.
