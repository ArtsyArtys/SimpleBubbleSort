const split = arr => {
  const arr1 = arr.slice(0, Math.floor(arr.length / 2));
  const arr2 = arr.slice(Math.floor(arr.length / 2));
  return [arr1, arr2];
};

const merge = (arr1, arr2) => {
  const returnedArr = [];

  while (arr1.length || arr2.length) {
    if (arr1[0] === undefined) {
      returnedArr.push(arr2.splice(0, 1)[0]);
    } else if (arr2[0] === undefined) {
      returnedArr.push(arr1.splice(0, 1)[0]);
    } else {
      const valToPush =
        arr1[0] < arr2[0] ? arr1.splice(0, 1)[0] : arr2.splice(0, 1)[0];
      returnedArr.push(valToPush);
    }
  }

  return returnedArr;
};

const mergeSort = array => {
  const len = array.length;
  const newArray = split(array);
  let count = 0;

  while (newArray.length < len) {
    if (newArray[count].length > 1) {
      const tempArr = split(newArray[count]);
      newArray.splice(count, 1);
      newArray.push(tempArr[1]);
      newArray.push(tempArr[0]);
    } else {
      count++;
    }
  }

  while (newArray[1]) {
    newArray[0] = merge(newArray[0], newArray[1]);
    newArray.splice(1, 1);
  }

  return newArray[0];
};
