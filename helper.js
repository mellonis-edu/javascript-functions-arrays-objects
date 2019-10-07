function randomInt(upperBound) {
  return Math.trunc(Math.random() * upperBound);
}

function fibonacci(n) {
  let [a, b] = [0, 1];

  [...new Array(n)].forEach(() => {
    [a, b] = [b, b + a];
  });

  return a;
}

function Human(name) {
  this.name = name;
}

export {
  Human,
  fibonacci,
  randomInt,
};
