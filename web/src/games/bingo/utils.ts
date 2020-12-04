export function shuffleArray(array) {
  const _array = [...array];
  for (var i = _array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }
  return _array;
}
