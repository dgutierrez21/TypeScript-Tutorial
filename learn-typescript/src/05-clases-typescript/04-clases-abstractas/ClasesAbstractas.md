# Clases abstractas de TypeScript

**Resumen**: en este tutorial, aprenderá sobre las clases abstractas de TypeScript.

## Introducción a las clases abstractas de TypeScript

Una clase abstracta se utiliza normalmente para definir comportamientos comunes para que las clases derivadas se extiendan. A diferencia de una clase regular, una clase abstracta no se puede instanciar directamente.

Las clases abstractas son una herramienta de programación orientada a objetos que permite definir una clase base que no se puede instanciar directamente, sino que debe ser heredada por subclases que implementen sus métodos abstractos.

Para declarar una clase abstracta, utilice la palabra clave abstract:

    abstract class Employee {
        //...
    }

Normalmente, una clase abstracta contiene uno o más métodos abstractos.

Un método abstracto no contiene implementación. Sólo define la firma del método sin incluir el cuerpo del método. Se debe implementar un método abstracto en la clase derivada.

A continuación se muestra la clase abstract Employee que tiene el método getSalary()

    abstract class Employee {
        constructor(private firstName: string, private lastName: string) {
        }
        abstract getSalary(): number
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        compensationStatement(): string {
            return `${this.fullName} makes ${this.getSalary()} a month.`;
        }
    }

En la clase Employee:

- El constructor declara las propiedades firstName y lastName.

- El método getSalary() es un método abstracto. La clase derivada implementará la lógica basada en el tipo de empleado.

- Los métodos getFullName()() y compensationStatement() contienen una implementación detallada. Tenga en cuenta que el método compensationStatement() llama al método getSalary()

Dado que la clase Employee es abstracta, no se puede crear un nuevo objeto a partir de ella. La instrucción siguiente provoca un error:

    let employee = new Employee('John','Doe');

Error:

    error TS2511: Cannot create an instance of an abstract class.

La siguiente clase FullTimeEmployee hereda de la clase Employee:

    class FullTimeEmployee extends Employee {
        constructor(firstName: string, lastName: string, private salary: number) {
            super(firstName, lastName);
        }
        getSalary(): number {
            return this.salary;
        }
    }

En esta clase FullTimeEmployee, el salario se establece en el constructor. Dado que getSalary() es un método abstracto de la clase Employee, la clase FullTimeEmployee necesita implementar este método.Employee En este ejemplo, solo devuelve el salario sin ningún cálculo.

A continuación se muestra la clase Contractor que también hereda de la clase Employee:

    class Contractor extends Employee {
        constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
            super(firstName, lastName);
        }
        getSalary(): number {
            return this.rate * this.hours;
        }
    }

En la clase Contractor, el constructor inicializa la tarifa y las horas. El método getSalary() calcula el salario multiplicando la tasa por las horas.

A continuación se crean primero un objeto FullTimeEmployee y un objeto Contractor y, a continuación, se muestran las instrucciones de compensación a la consola:

    let john = new FullTimeEmployee('John', 'Doe', 12000);
    let jane = new Contractor('Jane', 'Doe', 100, 160);

    console.log(john.compensationStatement());
    console.log(jane.compensationStatement());

Salida:

    John Doe makes 12000 a month.
    Jane Doe makes 16000 a month.

Se recomienda usar clases abstractas cuando desee compartir código entre algunas clases relacionadas.

# Resumen

- No se pueden crear instancias de clases abstractas.

- Una clase Abstract tiene al menos un método abstracto.

- Para utilizar una clase abstracta, debe heredarla y proporcionar la implementación para los métodos abstractos.
