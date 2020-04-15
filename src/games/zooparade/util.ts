export function idToColor(id: number) {
  return Math.floor(id / 10)
}

export function idToValue(id: number) {
  var rem = id % 10
  if (rem === 9 ){
    return 5
  }
  if (rem >= 7 ){
    return 4
  }
  if (rem >= 5 ){
    return 3 
  }
  if (rem >= 3 ){
    return 2 
  }
  if (rem >= 0){
    return 1
  }
}