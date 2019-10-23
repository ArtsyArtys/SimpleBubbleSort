const swap = (a, b) => {
  return [b, a];
};

const swapObj = {
  swap
};

const bubbleSort = arr => {
  let elsToCheck = arr.length - 1;

  while (elsToCheck > 0) {
    for (let i = 0; i < elsToCheck; i++) {
      if (arr[i] > arr[i + 1]) {
        let tempArr = swapObj.swap(arr[i], arr[i + 1]);
        arr[i] = tempArr[0];
        arr[i + 1] = tempArr[1];
      }
    }
    elsToCheck--;
  }
  return arr;
};


const bubbleSortWithCallback = (arr, callback) => {
  let elsToCheck = arr.length - 1;

  while (elsToCheck > 0) {
    for (let i = 0; i < elsToCheck; i++) {
      if (callback(arr[i], arr[i + 1]) === 1) {
        let tempArr = swapObj.swap(arr[i], arr[i + 1]);
        arr[i] = tempArr[0];
        arr[i + 1] = tempArr[1];
      }
    }
    elsToCheck--;
  }
  return arr;
};
