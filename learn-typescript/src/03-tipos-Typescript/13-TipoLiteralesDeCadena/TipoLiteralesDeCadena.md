# Tipos literales de cadena de TypeScript

Resumen: en este tutorial, aprenderá acerca de los tipos literales de cadena TypeScript que definen un tipo que acepta un literal de cadena especificado.

Los tipos literales de cadena permiten definir un tipo que sólo acepta un literal de cadena especificado.

A continuación se define un tipo literal de cadena que acepta una cadena literal ''click':

    let click: 'click';

El click clic es un tipo literal de cadena que acepta sólo el literal de cadena ''click'. Si asigna la cadena literal click al click, será válido:

    click = 'click'; // valid

Sin embargo, cuando se asigna otro literal de cadena al click, el compilador de TypeScript emitirá un error. Por ejemplo:

    click = 'dblclick'; // compiler error

Error:

    Type '"dblclick"' is not assignable to type '"click"'.

El tipo literal de cadena es útil para limitar un posible valor de cadena en una variable.

Los tipos literales de cadena se pueden combinar muy bien con los tipos de unión para definir un conjunto finito de valores literales de cadena para una variable:

    let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
    mouseEvent = 'click'; // valid
    mouseEvent = 'dblclick'; // valid
    mouseEvent = 'mouseup'; // valid
    mouseEvent = 'mousedown'; // valid
    mouseEvent = 'mouseover'; // compiler error

Si usa los tipos literales de cadena en varios lugares, serán muy detallados.

Para evitar esto, puede usar los alias de tipo. Por ejemplo:

    type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
    let mouseEvent: MouseEvent;
    mouseEvent = 'click'; // valid
    mouseEvent = 'dblclick'; // valid
    mouseEvent = 'mouseup'; // valid
    mouseEvent = 'mousedown'; // valid
    mouseEvent = 'mouseover'; // compiler error

    let anotherEvent: MouseEvent;

# Resumen

- Un tipo literal de cadena TypeScript define un tipo que acepta el literal de cadena especificado.

- Utilice los tipos literales de cadena con tipos de unión y alias de tipo para definir tipos que acepten un conjunto finito de literales de cadena.
