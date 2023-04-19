let click: "click";

click = "dbclick"; // invalid

click = "click"; // valid

//  limitar un posible valor de cadena en una variable.

// combinar con los tipos union

let eventoMouse: "click" | "mouseup" | "dbclick" | "mousedown";

eventoMouse = "mousedown"; // valid

eventoMouse = "click"; // valid

eventoMouse = "focus"; // invalid

// usar alias de tipo si se va a usar en varios lugares

type eventoMouse = "click" | "mouseup" | "dbclick" | "mousedown";

let eventosNav: eventoMouse;

eventosNav = "click"; // valid
eventosNav = "mouseup"; // valid
eventosNav = "mouseover"; // invalid

let otroEvento: eventoMouse;

export const TipoLiteralesDeCadena = () => {
  return <div>TipoLiteralesDeCadena</div>;
};
