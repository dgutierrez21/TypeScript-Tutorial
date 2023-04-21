# Parámetros predeterminados de TypeScript

**Resumen**: en este tutorial, aprenderá acerca de los parámetros predeterminados de TypeScript.

## Introducción a los parámetros predeterminados de TypeScript

JavaScript admitió parámetros predeterminados desde ES2015 (o ES6) con la siguiente sintaxis:

    function name(parameter1=defaultValue1,...) {
       // do something
    }

En esta sintaxis, si no pasa argumentos o pasa lo undefined a la función al llamarla, la función tomará los valores inicializados predeterminados para los parámetros omitidos. Por ejemplo:

    function applyDiscount(price, discount = 0.05) {
        return price * (1 - discount);
    }

    console.log(applyDiscount(100)); // 95

En este ejemplo, la función applyDiscount() tiene el parámetro discount como parámetro predeterminado.

Cuando no se discount discount a la función applyDiscount() la función utiliza un valor predeterminado que es 0.05.

Al igual que JavaScript, puede usar parámetros predeterminados en TypeScript con la misma sintaxis:

    function name(parameter1:type=defaultvalue1, parameter2:type=defaultvalue2,...) {
       //
    }

En el ejemplo siguiente se utilizan parámetros predeterminados para la función applyDiscount()

    function applyDiscount(price: number, discount: number = 0.05): number {
        return price * (1 - discount);
    }

    console.log(applyDiscount(100)); // 95

Tenga en cuenta que no puede incluir parámetros predeterminados en las definiciones de tipo de función. El código siguiente producirá un error:

    let promotion: (price: number, discount: number = 0.05) => number;

Error:

    error TS2371: A parameter initializer is only allowed in a function or constructor implementation.

## Parámetros predeterminados y parámetros opcionales

Al igual que los parámetros opcionales, los parámetros predeterminados también son opcionales. Esto significa que puede omitir los parámetros predeterminados al llamar a la función.

Además, tanto los parámetros predeterminados como los parámetros predeterminados finales comparten el mismo tipo. Por ejemplo, la siguiente función:

    function applyDiscount(price: number, discount: number = 0.05): number {
      // ...
    }

y

    function applyDiscount(price: number, discount?: number): number {
      // ...
    }

Compartir el mismo tipo:

    (price: number, discount?: number) => number

Los parámetros opcionales deben venir después de los parámetros requeridos. Sin embargo, no es necesario que los parámetros predeterminados aparezcan después de los parámetros requeridos.

Cuando aparece un parámetro predeterminado antes de un parámetro obligatorio, debe pasar explícitamente undefined para obtener el valor inicializado predeterminado.

La siguiente función devuelve el número de días de un mes y año especificados:

    function getDay(year: number = new Date().getFullYear(), month: number): number {
        let day = 0;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day = 30;
                break;
            case 2:
                // leap year
                if (((year % 4 == 0) &&
                    !(year % 100 == 0))
                    || (year % 400 == 0))
                    day = 29;
                else
                    day = 28;
                break;
            default:
                throw Error('Invalid month');
        }
        return day;
    }

En este ejemplo, el valor predeterminado del año es el año actual si no pasa un argumento o pasa el valor no definido.

En el ejemplo siguiente se usa la función getDay() para obtener el número de días de febrero de 2019:

    let day = getDay(2019, 2);
    console.log(day); // 28

Para obtener el número de días en febrero del año actual, debe pasar undefined al parámetro year de esta manera:

    let day = getDay(undefined, 2);
    console.log(day);

## Resumen

- Utilice el parámetro de sintaxis de parámetro predeterminado **parameter:=defaultValue** si desea establecer el valor inicializado predeterminado para el parámetro.

- Los parámetros predeterminados son opcionales.

- Para utilizar el valor inicializado predeterminado de un parámetro, omita el argumento al llamar a la función o pase lo undefined a la función.
