function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let generateRandomElement = Math.floor(Math.random() * arr.length);
  const selection = arr[generateRandomElement];

  return selection;
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;