export const shuffleArray = (array) => {
  const _array = [...array];
  for (let i = _array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }
  return _array;
};
