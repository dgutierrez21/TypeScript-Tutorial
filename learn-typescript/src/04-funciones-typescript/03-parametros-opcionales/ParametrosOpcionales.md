# Parámetros opcionales de TypeScript

**Resumen**: en este tutorial, aprenderá a utilizar los parámetros opcionales de TypeScript para las funciones.

En JavaScript, puede llamar a una función sin pasar ningún argumento, aunque la función especifique parámetros. Por lo tanto, JaveScript admite los parámetros opcionales de forma predeterminada.

En TypeScript, el compilador comprueba cada llamada a función y emite un error en los siguientes casos:

- El número de argumentos es diferente del número de parámetros especificados en la función.

- O los tipos de argumentos no son compatibles con los tipos de parámetros de función.

Dado que el compilador comprueba minuciosamente los argumentos de paso, debe anotar parámetros opcionales para indicar al compilador que no emita un error al omitir los argumentos.

Para que un parámetro de función sea opcional, utilice el ? después del nombre del parámetro. Por ejemplo:

    function multiply(a: number, b: number, c?: number): number {

        if (typeof c !== 'undefined') {
            return a * b * c;
        }
        return a * b;
    }

Cómo funciona:

- En primer lugar, utilice el ? después del parámetro c.

- En segundo lugar, compruebe si el argumento se pasa a la función utilizando la expresión typeof c !== 'undefined'.

Tenga en cuenta que si utiliza la expresión if(c) para comprobar si un argumento no se inicializa, encontrará que la cadena vacía o cero se trataría como undefined.

Los parámetros opcionales deben aparecer después de los parámetros requeridos en la lista de parámetros.

Por ejemplo, si hace que el parámetro b sea opcional y el parámetro c es necesario, el compilador de TypeScript emitirá un error:

    function multiply(a: number, b?: number, c: number): number {

        if (typeof c !== 'undefined') {
            return a * b * c;
        }
        return a * b;
    }

Error:

    error TS1016: A required parameter cannot follow an optional parameter.

## Resumen

- Usar el parameter?: type la sintaxis para que un parámetro sea opcional.

- Utilice la expresión typeof(parameter) !== 'undefined' para comprobar si el parámetro se ha inicializado.
