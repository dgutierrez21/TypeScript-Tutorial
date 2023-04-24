# Fundición de tipos

**Resumen**: en este tutorial, aprenderá acerca de las fundiciones de tipos en TypeScript, que le permiten convertir una variable de un tipo a otro.

JavaScript no tiene un concepto de conversión de tipos porque las variables tienen tipos dinámicos. Sin embargo, cada variable de TypeScript tiene un tipo. Las fundiciones de tipos permiten convertir una variable de un tipo a otro.

En TypeScript, puede utilizar la palabra clave as o el operador <> para las conversiones de tipos.

Escriba casting usando la palabra clave as
A continuación se selecciona el primer elemento de entrada mediante el método querySelector()

    let input = document.querySelector('input["type="text"]');

Dado que el tipo devuelto del método document.querySelector() es el tipo Element, el código siguiente provoca un error del compilador:

    console.log(input.value);

La razón es que la propiedad value no existe en el tipo Element. Sólo existe en el tipo HTMLInputElement.

Para resolver esto, puede usar la conversión de tipos que convierte el elemento a HTMLInputElement utilizando la palabra clave as como esta:

    let input = document.querySelector('input[type="text"]') as HTMLInputElement;

Ahora, la variable input tiene el tipo HTMLInputElement. Por lo tanto, acceder a su propiedad value no causará ningún error. El código siguiente funciona:

    console.log(input.value);

Otra forma de convertir el Element a HTMLInputElement es cuando se obtiene acceso a la propiedad de la siguiente manera:

l et enteredText = (input as HTMLInputElement).value;

Tenga en cuenta que el tipo HTMLInputElement extiende el tipo HTMLElement que se extiende al tipo Element. Cuando se convierte HTMLElement a HTMLInputElement, este tipo de conversión también se conoce como conversión descendente.

También es posible llevar una fundición hacia abajo. Por ejemplo:

    let el: HTMLElement;
    el = new HTMLInputElement();

En este ejemplo, la variable el tiene el tipo HTMLElement. Y puede asignarle una instancia del tipo HTMLInputElement porque el tipo HTMLInputElement es una subclase del tipo HTMLElement.HTMLInputElement

La sintaxis para convertir una variable de tipo typeA a typeB es la siguiente:

    let a: typeA;
    let b = a as typeB;

## Conversión de tipos utilizando el operador <>

Además de la palabra clave as, puede utilizar el operador <> para llevar una fundición de tipos. Por ejemplo:

    let input = <HTMLInputElement>document.querySelector('input[type="text"]');

    console.log(input.value);

La sintaxis de la conversión de tipos mediante la <> es:

    let a: typeA;
    let b = <typeB>a;

# Resumen

- La conversión de tipos permite convertir una variable de un tipo a otro.

- Utilice la palabra clave as o el operador <> para las fundiciones de tipos.

## resumen #2

La fundición de tipos en TypeScript se refiere a la conversión de un tipo de datos a otro tipo de datos compatible. En TypeScript, la fundición de tipos se puede realizar de dos maneras: mediante la aserción de tipo y mediante la conversión de tipo.

La aserción de tipo es una forma de decirle al compilador de TypeScript que se tiene conocimiento de que un valor es de un tipo específico, incluso si el compilador no puede inferirlo automáticamente. La sintaxis para la aserción de tipo es la siguiente:

    valor as tipo

Donde valor es el valor que se está asertando y tipo es el tipo al que se está asertando. Por ejemplo:

    const valor = '123';
    const numero = valor as number;

En este ejemplo, se está asertando que valor es un número utilizando la aserción de tipo.

La conversión de tipo es una forma de convertir un valor de un tipo a otro tipo compatible. En TypeScript, la conversión de tipo se puede realizar utilizando funciones de conversión incorporadas, como parseInt() y parseFloat(). Por ejemplo:

    const valor = '123';
    const numero = parseInt(valor);

En este ejemplo, se está convirtiendo valor en un número utilizando la función parseInt().

En resumen, la fundición de tipos en TypeScript se refiere a la conversión de un tipo de datos a otro tipo de datos compatible. Se puede realizar mediante la aserción de tipo o mediante la conversión de tipo utilizando funciones de conversión incorporadas.
