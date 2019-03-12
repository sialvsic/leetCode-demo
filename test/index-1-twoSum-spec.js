import twoSum from '../src/index-1-twoSum';

describe('twoSum', () => {

  it('Array: [2, 7, 11, 15] target: 9, result: [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1])
  });

  it('Array: [3, 2, 4] target: 6, result: [1, 2]', () => {
    expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2])
  });

});
