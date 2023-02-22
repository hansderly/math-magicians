import calculate from './calculate';

describe('Calculate', () => {
  it('should return an object with all properties have null as value', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: '+',
    };

    const buttonName = 'AC';

    expect(calculate(obj, buttonName)).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
