const randoM = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index]
}

exports.randoM = randoM
