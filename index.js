function sumItems(array) {
  // Sum all the numbers in the array
  return array.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a + sumItems(b);
    }
    return a + b;
  }, 0);
}

module.exports = sumItems;
