# Restricciones genéricas de TypeScript

**Resumen**: en este tutorial, aprenderá acerca de las restricciones genéricas de TypeScript.

## Introducción a las restricciones genéricas en TypeScript

Considere el siguiente ejemplo:

    function merge<U, V>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }

El merge() es una función genérica que combina dos objetos. Por ejemplo:

    let person = merge(
        { name: 'John' },
        { age: 25 }
    );

    console.log(result);

Salida:

    { name: 'John', age: 25 }

Funciona perfectamente bien.

La función merge() espera dos objetos. Sin embargo, no le impide pasar un no objeto como este:

    let person = merge(
        { name: 'John' },
        25
    );

    console.log(person);

Salida:

    { name: 'John' }

TypeScript no emite ningún error.

En lugar de trabajar con todos los tipos, es posible que desee agregar una restricción a la función merge() para que funcione sólo con objetos.

Para hacer esto, debe enumerar el requisito como una restricción sobre lo que pueden ser los tipos U y V.

Para denotar la restricción, utilice la palabra clave extends. Por ejemplo:

    function merge<U extends object, V extends object>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }

Debido a que la función merge() ahora está restringida, ya no funcionará con todos los tipos. En su lugar, solo funciona con el tipo de object.

Lo siguiente dará como resultado un error:

    let person = merge(
        { name: 'John' },
        25
    );

Error:

    Argument of type '25' is not assignable to parameter of type 'object'.

Uso de parámetros de tipo en restricciones genéricas
TypeScript permite declarar un parámetro de tipo restringido por otro parámetro de tipo.

La siguiente función prop() acepta un objeto y un nombre de propiedad. Devuelve el valor de la propiedad.

    function prop<T, K>(obj: T, key: K) {
        return obj[key];
    }

El compilador emite el siguiente error:

    Type 'K' cannot be used to index type 'T'.

Para corregir este error, agregue una restricción a K para asegurarse de que es una clave de T siguiente manera:

    function prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

Si pasa a la función prop un nombre de propiedad que existe en el obj, el compilador no se quejará. Por ejemplo:

    let str = prop({ name: 'John' }, 'name');
    console.log(str);

Salida:

    John

Sin embargo, si pasa una clave que no existe en el primer argumento, el compilador emitirá un error:

    let str = prop({ name: 'John' }, 'age');

Error:

    Argument of type '"age"' is not assignable to parameter of type '"name"'.

# Resumen

- Use extends palabra clave extend para restringir el parámetro type a un tipo específico.

- Utilice extends keyof restringir un tipo que es propiedad de otro objeto.
