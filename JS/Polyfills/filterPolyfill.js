let arr = [12, 34, 43, 22, 8, 19];

Array.prototype.myFilterPolyfill = function (cb_fn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb_fn(this[i])) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const res = arr.myFilterPolyfill((x) => x < 30);
console.log(res);
