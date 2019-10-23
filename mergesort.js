// const split = arr => {
//   const arr1 = arr.slice(0, Math.floor(arr.length / 2));
//   const arr2 = arr.slice(Math.floor(arr.length / 2));
//   console.log(arr1, arr2);
//   console.log([arr1, arr2]);
//   return [arr1, arr2];
// };
//
// const merge = (arr1, arr2) => {
//   const returnedArr = [];
//
//   while (arr1.length || arr2.length) {
//     if (arr1[0] === undefined) {
//       returnedArr.push(arr2.shift());
//     } else if (arr2[0] === undefined) {
//       returnedArr.push(arr1.shift());
//     } else {
//       const valToPush =
//         arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
//       returnedArr.push(valToPush);
//     }
//   }
//
//   return returnedArr;
// };
//
// const mergeSort = array => {
//   const len = array.length;
//   const newArray = split(array);
//   console.log('NEWARRAY', newArray)
//   let count = 1;
//   // let count = 0;
//
//   // while (newArray.length < len) {
//   //   if (newArray[count].length > 1) {
//   //     const tempArr = split(newArray[count]);
//   //     newArray.splice(count, 1);
//   //     newArray.push(tempArr[1]);
//   //     newArray.push(tempArr[0]);
//   //   } else {
//   //     count++;
//   //   }
//   // }
//
//   while (newArray[1]) {
//     newArray[0] = merge(newArray[0], newArray[1]);
//     newArray.splice(1, 1);
//   }
//
//   return newArray[0];
// };

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}


function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}
