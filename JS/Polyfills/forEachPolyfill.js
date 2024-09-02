let arr = [9, 7, 5, 3, 1];

Array.prototype.myForEachPolyfill = function (cb_fn) {
  for (let i = 0; i < this.length; i++) {
    cb_fn(this[i]);
  }
};

const res = arr.myForEachPolyfill((x) => console.log(x));
