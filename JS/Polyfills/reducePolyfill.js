let arr = [1, 2, 3, 4, 5];

Array.prototype.myReducePolyfill = function (cb_fn, initial_value) {
  let acc = initial_value;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb_fn(acc, this[i]) : this[i];
  }
  return acc;
};

const res = arr.myReducePolyfill((acc, curr) => acc + curr);
console.log(res);
