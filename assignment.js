/* eslint-disable no-param-reassign */
import {
// Human,
} from './helper';

/*
   Определите функцию first принимающую 2 аргумента, которая возвращает другую функцию,
   которая в свою очередь возвращает сумму двух своих аргументов минус произведение аргументов
   функции first.

   Пример:

   const func = first(3, 6);
   const result = func(4, 8);

   result === (4 + 8) - 3 * 6; // true
*/

// ...

/*
   Определите функцию second, которая возвращает список из 5 функций, которые при вызове
   возвращают сумму аргумента, переданного в функцию, и индекса функции в возвращённом
   списке умноженного на 2.

   Пример:

   const list = second();

   list[0](2) === 2 + 0 * 2; // true
   list[1](2) === 2 + 1 * 2; // true
   list[2](2) === 2 + 2 * 2; // true
   list[3](2) === 2 + 3 * 2; // true
   list[4](2) === 2 + 4 * 2; // true
*/

// ...

/*
  Определите функцию third, которая принимает два аргумента типа Human.
  У первого объекта есть метод sayName, у второго его нет.
  Добавьте второму объекту метод sayName.

  Пример:

  const human1 = new Human('Лёлек');
  const human2 = new Human('Болек');

  human1.sayName instanceof Function; // true
  human2.sayName instanceof Function; // false

  third(human1, human2);

  human1.sayName instanceof Function; // true
  human2.sayName instanceof Function; // true

  human1.sayName(); // Лёлек
  human2.sayName(); // Болек
*/

// ...

/*
  Определите функцию fourth, которая принимает два аргумента типа Human.
  У первого объекта есть метод sayName, у второго его нет.
  Добавьте второму объекту метод sayName, но так, чтобы он возвращал
  имя первого человека.

  Пример:

  const human1 = new Human('Лёлек');
  const human2 = new Human('Болек');

  human1.sayName instanceof Function; // true
  human2.sayName instanceof Function; // false

  fourth(human1, human2);

  human1.sayName instanceof Function; // true
  human2.sayName instanceof Function; // true

  human1.sayName(); // Лёлек
  human2.sayName(); // Лёлек
*/

// ...

/*
  Определите функцию fifth, которая принимает object и модифицирует его:
  для каждого собственного свойства объекта создаёт в объекте свойство
  с именем, приведённым в верхний регистр, и с такими же значением.

  Пример:

  const object = {
    a: 1,
    b: 2,
  };

  fifth(object); // object

  object.a === object.A; // true
  object.b === object.B; // true
*/

// ...

/*
  Определите функцию sixth, которая возвращает функцию-конструктор Square.
  Функция-конструктор Square должна принимать один параметр side.
  У экземпляра square должно быть свойство side, равное переданному при создании аргументу.
  Плюс:
  - метод getPerimeter - возвращающий периметр квадрата
  - метод getSquare - возвращающий площадь квадрата

  Пример:

  const Square = sixth();
  const square = new Square(3);

  square.side === 3; // true
  square.getPerimeter() === 12; // true
  square.getSquare() === 9; // true
*/

// ...

/*
  Определите функцию seventh, которая принимает число и возвращает число из последовательности
  чисел Фибоначчи. В решении используйте рекурсию.

  Пример:

  seventh(0) === 0; // true
  seventh(10) === 55; // true
*/

// ...

/*
  Определите функцию eighth, которая возвращает сумму всех переданных в неё аргументов.
  Используйте объект arguments и цикл.
  Если ESLint будет ругаться на использование объекта arguments, добавьте
  перед строчкой, где используется объект arguments комментарий:
  // eslint-disable-next-line prefer-rest-params


  Пример:

  eighth() === 0; // true
  eighth(1) === 1; // true
  eighth(2, 3, 4) === 9; // true
*/

// ...

/*
  Определите функцию ninth, которая возвращает сумму всех переданных в неё аргументов.
  Используйте оператор '...' и цикл.

  Пример:

  ninth() === 0; // true
  ninth(1) === 1; // true
  ninth(2, 3, 4) === 9; // true
*/

// ...

/*
  Определите функцию tenth, которая принимает 3 аргумента:
  - число a
  - число b
  - функцию callback

  Вызовите функцию callback, при этом:
  - если b === 0, передайте один фактический аргумент-строку: 'ОШИБКА'
  - если b !== 0, передайте два аргумента: null и остаток от деления a на b

  Пример:

  function test(error, result) {
    console.log(error || result);
  }

  tenth(10, 3, test); // 1
  tenth(10, 0, test); // ОШИБКА

*/

// ...

/*
  Определите функцию bind, которая принимает:
  - функцию func
  - параметр ctx
  - потенциально неограниченное количество аргументов после func и ctx

  Функция должна возвращать функцию с "привязанным" контекстом ctx.
  При вызове новая функция сначала должна получать аргументы переденные функции bind после ctx,
  а следом - фактические аргументы. Иными словами, реализуйте свою функцию bind, которая
  не использует стандартную.

  Пример:

  const binded = bind(function (...args) {
    return this + Math.max(...args);
  }, 'Максимальное: ', 10, 20);

  binded(15); // Максимальное: 20
  binded(25); // Максимальное: 25
*/

// ...

export {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  bind,
};
