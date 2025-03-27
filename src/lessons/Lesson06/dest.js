const fruits = ["apple", "grape"];

const arr = [...fruits, "cherry"];

console.log(arr);
console.log(fruits);

const bookObj = {
  bookName: "Great Gatsby",
  price: 20,
};

const newBookObj = { ...bookObj, author: "Fitzgerald" };

console.log(newBookObj);

// Деструктурирующее присваивание

const colors = ["red", "black"];

//const color1 = colors[0];

//const color2 = colors[1];

const [color1, color2] = colors;

console.log(color1);
console.log(color2);
console.log(colors);

// объекты

const animal = {
  title: "Dog",
  weigth: 20,
};

// const title = animal.title;
// при деструктурирующем присваивании объекта необходимы точные названия свойств 
// объекта и тогда будут созданы переменные с такими же названиями, если не задан псевдоним.

const { title, weigth: animalWeigth } = animal;

console.log(title);
//console.log(weigth);
console.log(animal);
console.log(animalWeigth);


