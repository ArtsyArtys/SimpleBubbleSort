
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('Should sort an array of numbers', function() {
    let testArr =  [12, 20, 55, 100, 200, 33, 2];
    expect( bubbleSort(testArr) ).toEqual([2, 12, 20, 33, 55, 100, 200]);
  });

  it('Should sort an array of strings', function() {
    let testArr =  ['bcd', 'abc', 'x', 'p', 'daring'];
    expect( bubbleSort(testArr) ).toEqual(['abc', 'bcd', 'daring', "p", 'x']);
  });

  it('Should mutate the original array', function() {
    const testArr = [0, 10, 4, 100, 12]
    expect( bubbleSort(testArr) ).toEqual(testArr);
  })

  it('Should work with negative numbers', function() {
    let testArr = [-5, -10, 20, 100]
    expect( bubbleSort(testArr) ).toEqual([-10, -5, 20, 100]);
  })

  it('Should have a function called swap.', function() {
    expect(typeof swap).toEqual("function");
  })
});
