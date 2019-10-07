import {
  Human,
  fibonacci,
  randomInt,
} from './helper';
import {
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
} from './assignment';

describe('assignments', () => {
  test('first', () => {
    expect(first).toBeInstanceOf(Function);
    const data = [...new Array(10)]
      .map(() => {
        const list = [randomInt(100), randomInt(100)];
        return [
          list,
          first(...list),
        ];
      });

    expect(data.every((list) => list[1] instanceof Function)).toBe(true);
    expect(data.every((list) => {
      const anotherList = [randomInt(100), randomInt(100)];
      return list[1](...anotherList)
      === (anotherList[0] + anotherList[1]) - list[0][0] * list[0][1];
    })).toBe(true);
  });

  test('second', () => {
    expect(second).toBeInstanceOf(Function);
    const list = second();
    expect(list).toBeInstanceOf(Array);
    expect(list.length).toBe(5);
    expect(list.every((func) => func instanceof Function)).toBe(true);
    [...new Array(10)].forEach(() => {
      const arg = randomInt(100);
      expect(list.every((func, ix) => func(arg) === arg + ix * 2)).toBe(true);
    });
  });

  test('third', () => {
    expect(third).toBeInstanceOf(Function);
    [...new Array(10)].forEach(() => {
      const prefix = 'Name';
      const list = [randomInt(100), randomInt(100)];
      const people = list.map((num) => new Human(`${prefix}${num}`));
      people[0].sayName = function sayName() {
        return this.name;
      };
      third(...people);
      expect(people[1].sayName).toBeInstanceOf(Function);
      expect(people[1].sayName()).toBe(`${prefix}${list[1]}`);
    });
  });

  test('fourth', () => {
    expect(fourth).toBeInstanceOf(Function);
    [...new Array(10)].forEach(() => {
      const prefix = 'Name';
      const list = [randomInt(100), randomInt(100)];
      const people = list.map((num) => new Human(`${prefix}${num}`));
      people[0].sayName = function sayName() {
        return this.name;
      };
      fourth(...people);
      expect(people[1].sayName).toBeInstanceOf(Function);
      expect(people[1].sayName()).toBe(`${prefix}${list[0]}`);
    });
  });

  test('fifth', () => {
    expect(fifth).toBeInstanceOf(Function);
    const object = {};
    const keyList = [...new Array(10)].map(() => String.fromCharCode('a'.charCodeAt(0) + randomInt(26)));
    keyList.forEach((key, ix) => {
      object[key] = ix;
    });
    expect(keyList.every((key) => Object.prototype.hasOwnProperty.call(object, key))).toBe(true);
    const returnedObject = fifth(object);
    expect(returnedObject).toBe(object);
    // eslint-disable-next-line max-len
    expect(keyList.every((key) => Object.prototype.hasOwnProperty.call(returnedObject, key.toUpperCase()) && object[key] === object[key.toUpperCase()])).toBe(true);
  });

  test('sixth', () => {
    expect(sixth).toBeInstanceOf(Function);
    const Square = sixth();
    expect(Square).toBeInstanceOf(Function);
    [...new Array(10)].forEach(() => {
      const side = randomInt(100);
      const square = new Square(side);
      expect(square).toBeInstanceOf(Square);
      expect(square.getPerimeter).toBeInstanceOf(Function);
      expect(square.getSquare).toBeInstanceOf(Function);
      expect(square.getPerimeter()).toEqual(side * 4);
      expect(square.getSquare()).toEqual(side * side);
    });
  });

  test('seventh', () => {
    const testsCount = 20;
    [...new Array(testsCount)].forEach(() => {
      const n = randomInt(testsCount);
      expect(seventh(n)).toEqual(fibonacci(n));
    });
  });

  test('eighth', () => {
    expect(eighth).toBeInstanceOf(Function);
    expect(
      [...new Array(10)]
        .map(() => [...new Array(randomInt(10))].map(() => randomInt(100)))
        .every((list) => eighth(...list) === list.reduce((sum, value) => sum + value, 0)),
    ).toBe(true);
  });

  test('ninth', () => {
    expect(ninth).toBeInstanceOf(Function);
    expect(
      [...new Array(10)]
        .map(() => [...new Array(randomInt(100))].map(() => randomInt(100)))
        .every((list) => ninth(...list) === list.reduce((sum, value) => sum + value, 0)),
    ).toBe(true);
  });

  test('tenth', () => {
    expect(tenth).toBeInstanceOf(Function);
    const mockedTenth = jest.fn(tenth);
    const mockedCallback = jest.fn();
    [...new Array(1000)].forEach(() => mockedTenth(randomInt(1000), randomInt(15), mockedCallback));
    expect(
      mockedTenth.mock.calls
        .every(([a, b], ix) => (
          b === 0
            ? mockedCallback.mock.calls[ix][0] === 'ОШИБКА'
            : mockedCallback.mock.calls[ix][0] == null && mockedCallback.mock.calls[ix][1] === a % b
        )),
    ).toBe(true);
  });
});

describe('bind', () => {
  test('bind is a function', () => {
    expect(bind).toBeInstanceOf(Function);
  });

  test('bind saves context', () => {
    const ctx = {};

    function foo() {
      return this;
    }

    const bindedFoo = bind(foo, ctx);

    expect(bindedFoo()).toBe(ctx);
  });

  test('double bind saves context', () => {
    const ctx = {};
    const ctx2 = {};

    function foo() {
      return this;
    }

    const bindedFoo = bind(bind(foo, ctx), ctx2);

    expect(bindedFoo()).toBe(ctx);
  });

  test('a binded function consumes parameters', () => {
    function foo(...arr) {
      return arr;
    }

    const bindedFoo = bind(foo, {});

    expect(bindedFoo(1, 2, 3)).toEqual([1, 2, 3]);
  });

  test('a binded function receives initialArgs', () => {
    function foo(...arr) {
      return arr;
    }

    const bindedFoo = bind(foo, {}, 1, 2, 3);

    expect(bindedFoo(4, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
