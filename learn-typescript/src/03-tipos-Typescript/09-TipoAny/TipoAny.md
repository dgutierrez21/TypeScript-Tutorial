# TypeScript cualquier tipo

Resumen: en este tutorial, aprenderá sobre TypeScript any tipo y cómo usarlo correctamente en su código.

## Introducción a TypeScript de cualquier tipo

A veces, es posible que necesite almacenar un valor en una variable. Pero no sabes su tipo en el momento de escribir el programa. Y el valor desconocido puede provenir de una API de terceros o de la entrada del usuario.

En este caso, desea optar por no participar en la comprobación de tipos y permitir que el valor pase a través de la comprobación en tiempo de compilación.

Para ello, utilice el any. El any permite asignar un valor de cualquier tipo a una variable:

    // json may come from a third-party API
    const json = `{"latitude": 10.11, "longitude":12.12}`;

    // parse JSON to find location
    const currentLocation = JSON.parse(json);
    console.log(currentLocation);

Salida:

{ latitude: 10.11, longitude: 12.12 }

En este ejemplo, la variable currentLocation se asigna a un objeto devuelto por la función JSON.parse()
Sin embargo, cuando usa currentLocation para tener acceso a las propiedades del objeto, TypeScript tampoco llevará ninguna comprobación:

    console.log(currentLocation.x);

Salida:

    undefined

El compilador de TypeScript no se queja ni emite ningún error.

El tipo any le proporciona una forma de trabajar con la base de código JavaScript existente. Le permite optar gradualmente por participar y excluirse de la verificación de tipos durante la compilación. Por lo tanto, puede any para migrar un proyecto JavaScript a TypeScript.

## TypeScript any: escritura implícita

Si declara una variable sin especificar un tipo, TypeScript supone que utiliza el tipo any. Esta característica se denomina inferencia de tipos. Básicamente, TypeScript adivina el tipo de la variable. Por ejemplo:

    let result;

En este ejemplo, TypeScript infiere el tipo automáticamente. Esta práctica se denomina tipificación implícita.

Tenga en cuenta que para deshabilitar la escritura implícita en el tipo any, cambie la opción noImplicitAny en el archivo tsconfig.json a true. Aprenderá más sobre tsconfig.json en el tutorial posterior.

## TypeScript any vs. object

Si declara una variable con el tipo de object, también puede asignarle cualquier valor.

Sin embargo, no puede llamar a un método en él, incluso el método realmente existe. Por ejemplo:

    let result: any;
    result = 10.123;
    console.log(result.toFixed());
    result.willExist(); //

En este ejemplo, el compilador TypeScript no emite ninguna advertencia, incluso el método willExist() no existe en tiempo de compilación porque el método willExist() podría willExist() estar disponible en tiempo de ejecución.

Sin embargo, si cambia el tipo de la variable de result a object, el compilador de TypeScript emitirá un error:

    let result: object;
    result = 10.123;
    result.toFixed();

Error:

    error TS2339: Property 'toFixed' does not exist on type 'object'.

## Resumen

- TypeScript any type permite almacenar un valor de cualquier tipo. Indica al compilador que omita la comprobación de tipos.

- Utilice el tipo any para almacenar un valor que en realidad no conoce su tipo en tiempo de compilación o cuando migre un proyecto JavaScript a un proyecto TypeScript.
