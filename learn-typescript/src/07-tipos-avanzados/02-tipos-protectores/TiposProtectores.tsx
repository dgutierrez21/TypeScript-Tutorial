type alfanumerico = string | number;

function aniadir(a: alfanumerico, b: alfanumerico) {
  if (typeof a === "number" && typeof b === "number") return a + b;

  if (typeof a === "string" && typeof b === "string") return a + " " + b;

  throw new Error(
    "Argumentos no válidos. Ambos argumentos deben ser números o cadenas."
  );
}

console.log(aniadir("hola", "Mundo"));

const TiposProtectores = () => {
  return <div>TiposProtectores</div>;
};

export default TiposProtectores;
