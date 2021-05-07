export function transpose<T extends string>(matrix: T[][]) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}
