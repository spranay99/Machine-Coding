let arr = [1, 2, 3, 4, 5];

Array.prototype.myMapPolyfill = function (cb_fn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb_fn(this[i]));
  }
  return temp;
};

const result = arr.myMapPolyfill((x) => x ** 2);
console.log(result);
