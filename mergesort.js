const split = arr => {
  const arr1 = arr.slice(0, Math.floor(arr.length / 2))
  const arr2 = arr.slice(Math.floor(arr.length / 2))
  return [arr1, arr2];
}


const merge = (arr1, arr2) => {
  const returnedArr = [];

  while (arr1.length || arr2.length) {
    if (arr1[0] === undefined) {
      returnedArr.push(arr2.splice(0, 1)[0])
    }
    else if (arr2[0] === undefined) {
      returnedArr.push(arr1.splice(0, 1)[0])
    }
    else {
      const valToPush = arr1[0] < arr2[0] ? arr1.splice(0, 1)[0] : arr2.splice(0, 1)[0];
      returnedArr.push(valToPush)
    }
  }

  return returnedArr;
}
