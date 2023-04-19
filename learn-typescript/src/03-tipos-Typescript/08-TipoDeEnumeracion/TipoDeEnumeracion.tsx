enum Meses {
  ene,
  feb,
  mar,
  abr,
  may,
  jun,
  jul,
  ago,
  sep,
  oct,
  nov,
  dic,
}

function esVerano(mes: Meses) {
  let esVerano: boolean;
  switch (mes) {
    case Meses.jun:
    case Meses.jul:
    case Meses.ago:
      esVerano = true;

      break;

    default:
      esVerano = false;
      break;
  }

  return esVerano;
}

console.log(esVerano(Meses.feb));

// se puede pasar un número pero es recomendable utilizar los valores definidos

console.log(esVerano(5));

// Especificación de números de miembros de enumeración

enum Meses2 {
  ene = 1,
  feb,
  mar,
  abr,
  may,
  jun,
  jul,
  ago,
  sep,
  oct,
  nov,
  dic,
}

console.log(Meses2.dic); // 12

//ejemplo de Cuándo usar una enumeración

enum EstadoAprobacion {
  borrador,
  presentado,
  aprobado,
  rechazado,
}

const solicitar = {
  id: 1,
  estado: EstadoAprobacion.aprobado,
  descripcion: "Por favor, apruebe esta solicitud",
};

if (solicitar.estado === EstadoAprobacion.aprobado)
  console.log("Enviar correo electrónico al solicitante...");

export const TipoDeEnumeracion = () => {
  return <div>TipoDeEnumeracion</div>;
};
