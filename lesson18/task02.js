function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();
sayHello();

console.log("===============");

greet("Ivan");
greet("Alex");

function greet(name) {
  console.log(`Hello , ${name}!`);
}

console.log("===============");

const result = getSum(3, 5);
console.log(result);
console.log(getSum(22, 33));
console.log(getSum); // not use

function getSum(number1, number2) {
  return number1 + number2;
}

console.log("=========================");

const numbers = [1, 2, 3, 4, 5];
const cities = ["London", "Paris", "Madrid"];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement(numbers));
console.log(getLastElement(cities));

console.log("=========================");

console.log(generateArray(15));

function generateArray(size) {
  const result = [];
  for (let i = 1; i <= size; i++) {
    result.push(i);
  }
  return result;
}

console.log("=========================");

function greting1(name = "Anonimus") {
  return `Hello ${name}!`;
}

console.log(greting1("Vasya"));
console.log(greting1());

function greting1(name = "Anonimus") {
  return `Hello ${name}!!!!!!!`;
}

console.log(greting1());

console.log("=============================");

const greet1 = function greet1Func(name = "Anonimus") {
  return `Hello ${name}`;
};

console.log(greet1("Petya"), typeof greet1);

// console.log(greet2('Kolya')); ERROR

const greet2 = function (name = "Unnoun") {
  return `HELLO ${name}`;
};
console.log(greet2("Kolya"));

console.log("=============================");

const greet3 = (name = "Vasya") => {
  //universal
  let abc = "ABC";
  return `Hello ${name} ${abc}`;
};

console.log(greet3("Olya"));

const greet4 = (name) => `Hello ${name} !!!`; // lite
console.log(greet4("Tolya"));

const greet5 = () => console.log("Hello world");
greet5();
console.log(typeof greet5, greet5);

/*
HW_18_TEXT

1.Напишите четыре функции для основных математических действий + - * /
2.Напишите функцию калькулятор, принимающую при вызове два числа 
и функцию операции над этими числами и возвращающую результат вычислений
3.Попробуйте написать все эти функции через function-declaration.
4.Попробуйте написать все эти функции через  function-expression.
5.*** 
Попробуйте написать все эти функции черед стрелочный синтаксис
    который имеет свою специфику и подходит не всегда.
 */
