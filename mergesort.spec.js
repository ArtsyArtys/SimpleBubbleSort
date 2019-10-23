xdescribe('split function', function() {
  it('should return an array', function() {
    expect(Array.isArray(split([1, 2, 3, 4]))).toEqual(true);
  });

  it('Should return an array of two arrays', function() {
    const testArr = split([1, 2, 3, 4]);
    expect(testArr.length).toEqual(2);
    expect(Array.isArray(testArr[0])).toEqual(true);
    expect(Array.isArray(testArr[1])).toEqual(true);
  });

  it('Should be able to handle odd-length array', function() {
    const testArr = split([1, 2, 3, 4, 5]);
    expect(testArr[0].length).toEqual(2);
    expect(testArr[1].length).toEqual(3);
  });
});

xdescribe('merge function', function() {
  it('Should return a single sorted array', function() {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
  it('Should work with odd-length arrays', function() {
    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('mergeSort function', function() {
  xit('Should return an array', function() {
    expect(Array.isArray(mergeSort([1, 2, 3, 4]))).toEqual(true);
  });

  it('Should sort an array of numbers', function() {
    let testArr = [12, 20, 55, 100, 200, 33];
    expect(mergeSort(testArr)).toEqual([12, 20, 33, 55, 100, 200]);
  });

  xit('Should sort an array of strings', function() {
    let testArr = ['bcd', 'abc', 'x', 'p', 'daring'];
    expect(mergeSort(testArr)).toEqual(['abc', 'bcd', 'daring', 'p', 'x']);
  });

  xit('Should work with negative numbers', function() {
    let testArr = [-5, -10, 20, 100];
    expect(mergeSort(testArr)).toEqual([-10, -5, 20, 100]);
  });
});
