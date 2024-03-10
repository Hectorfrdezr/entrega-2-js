const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// console.log(pizzas);

console.log("-----------------------------------------------------");
// Las pizzas que tengan un id impar//

let idImpares = pizzas.filter(objeto => objeto.id % 2 !== 0);

let nombresImpar=idImpares.map(objeto=> objeto.nombre);

console.log(`menu`, nombresImpar);

console.log("---------------------------------------------------------");


console.log("Responder: ¿Hay alguna pizza que valga menos de $600?");

let menorPrecio = pizzas.reduce((menor, actual ) => {
  return (actual.precio < menor.precio) ? actual:menor;
});

let pizzaMenorPrecio = menorPrecio.nombre;
console.log(`si la`, pizzaMenorPrecio);

console.log("---------------------------------------------------------");

// El nombre de cada pizza con su respectivo precio//

pizzas.map(producto => {
  console.log(`Nombre: ${producto.nombre}, Precio:${producto.precio}`);
});
console.log("---------------------------------------------------------")
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.//

pizzas.forEach(pizza => console.log(`Nombre: ${pizza.nombre} : Ingredientes: ${pizza.ingredientes.join(`, `)}`));


