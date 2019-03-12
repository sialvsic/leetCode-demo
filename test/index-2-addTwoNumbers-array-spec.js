import addTwoNumbersInArray from '../src/index-2-addTwoNumbers-array';

/*
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/


describe('addTwoNumbersInArray', () => {

  it('addTwoNumbersInArray([2,4,3], [5,6,4]), result: [7,0,8]', () => {
    expect(addTwoNumbersInArray([2,4,3], [5,6,4])).to.deep.equal([7,0,8])
  });

});
