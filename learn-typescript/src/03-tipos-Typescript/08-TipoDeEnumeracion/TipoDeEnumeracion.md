# Enumeración de TypeScript

Resumen: en este tutorial, aprenderá sobre el tipo de enumeración TypeScript y cómo usarlo de manera eficaz.

## ¿Qué es una enumeración?

Una enumeración es un grupo de valores constantes con nombre. Enum significa tipo enumerado.

Para definir una enumeración, siga estos pasos:

- Primero, use la palabra clave **enum** seguida del nombre de la enumeración.

- A continuación, defina valores constantes para la enumeración.

A continuación se muestra la sintaxis para definir una enumeración:

    enum name {constant1, constant2, ...};

En esta sintaxis, la constant1, constant2, etc., también se conocen como los miembros de la enumeración.

Ejemplo de tipo de enumeración de TypeScript
En el ejemplo siguiente se crea una enumeración que representa los meses del año:

    enum Month {
        Jan,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec
    };

En este ejemplo, el nombre de enumeración es Month y los valores constantes son Jan, Feb, Mar.

A continuación se declara una función que utiliza la enumeración Month como tipo del parámetro month:

    function isItSummer(month: Month) {
        let isSummer: boolean;
        switch (month) {
            case Month.Jun:
            case Month.Jul:
            case Month.Aug:
                isSummer = true;
                break;
            default:
                isSummer = false;
                break;
        }
        return isSummer;
    }

Y puedes llamarlo así:

    console.log(isItSummer(Month.Jun)); // true

En este ejemplo se utilizan valores constantes como Jan, Feb, Mar en la enumeración en lugar de valores mágicos como 1, 2, 3,... Esto hace que el código sea más obvio.

## Cómo funciona la enumeración de TypeScript

Se recomienda utilizar los valores constantes definidos por las enumeraciones en el código.

Sin embargo, en el ejemplo siguiente se pasa un número en lugar de una enumeración a la función isItSummer() Y funciona.

    console.log(isItSummer(6)); // true

En este ejemplo se utiliza un número (6) en lugar de una constante definida por la enumeración Month. Y funciona.

Revisemos el código Javascript generado de la enumeración del mes:

    var Month;
    (function (Month) {
        Month[Month["Jan"] = 0] = "Jan";
        Month[Month["Feb"] = 1] = "Feb";
        Month[Month["Mar"] = 2] = "Mar";
        Month[Month["Apr"] = 3] = "Apr";
        Month[Month["May"] = 4] = "May";
        Month[Month["Jun"] = 5] = "Jun";
        Month[Month["Jul"] = 6] = "Jul";
        Month[Month["Aug"] = 7] = "Aug";
        Month[Month["Sep"] = 8] = "Sep";
        Month[Month["Oct"] = 9] = "Oct";
        Month[Month["Nov"] = 10] = "Nov";
        Month[Month["Dec"] = 11] = "Dec";
    })(Month || (Month = {}));

Y puede enviar la variable Month a la consola:

    {
      '0': 'Jan',
      '1': 'Feb',
      '2': 'Mar',
      '3': 'Apr',
      '4': 'May',
      '5': 'Jun',
      '6': 'Jul',
      '7': 'Aug',
      '8': 'Sep',
      '9': 'Oct',
      '10': 'Nov',
      '11': 'Dec',
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11
    }

Como puede ver claramente en la salida, una enumeración TypeScript es un objeto en JavaScript. Este objeto tiene propiedades con nombre declaradas en la enumeración. Por ejemplo, Jan es 0 y Feb es 1.

El objeto generado también tiene claves numéricas con valores de cadena que representan las constantes con nombre.

Es por eso que puede pasar un número a la función que acepta una enumeración. En otras palabras, un miembro de enumeración es tanto un número como una constante definida.

## Especificación de números de miembros de enumeración

TypeScript define el valor numérico del miembro de una enumeración en función del orden de ese miembro que aparece en la definición de enumeración. Por ejemplo, Jan toma 0, Feb obtiene 1, etc.

Es posible especificar explícitamente números para los miembros de una enumeración como esta:

    enum Month {
        Jan = 1,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec
    };

En este ejemplo, el valor constante Jan toma 1 en lugar de 0. El Feb toma 2, y el Mar toma 3, etc.

## Cuándo usar una enumeración

Debe usar una enumeración cuando:

- Tener un pequeño conjunto de valores fijos que están estrechamente relacionados

- Y estos valores se conocen en tiempo de compilación.

Por ejemplo, puede utilizar una enumeración para el estado de aprobación:

    enum ApprovalStatus {
        draft,
        submitted,
        approved,
        rejected
    };

A continuación, puede usar la enumeración ApprovalStatus de esta manera:

    const request =  {
        id: 1,
        status: ApprovalStatus.approved,
        description: 'Please approve this request'
    };

    if(request.status === ApprovalStatus.approved) {
        // send an email
        console.log('Send email to the Applicant...');
    }

## Resumen

- Una enumeración TypeScript es un grupo de valores constantes.

- Bajo el capó, una enumeración de un objeto JavaScript con propiedades con nombre declaradas en la definición de enumeración.

- Utilice una enumeración cuando tenga un pequeño conjunto de valores fijos que estén estrechamente relacionados y conocidos en tiempo de compilación.
