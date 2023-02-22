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

  it('Should append the number to next if there is no operation', () => {
    const result = calculate({ total: null, next: 5, operation: 'null' }, '2');

    expect(result).toStrictEqual({
      total: null,
      next: '52',
      operation: 'null',
    });
  });

  it('should return the opposite sign of the number', () => {
    const obj = {
      total: '42',
      next: null,
      operation: null,
    };

    const buttonName = '+/-';

    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '-42',
      next: null,
      operation: null,
    });
  });

  it('should return total of the operation when the = button has pressed', () => {
    const obj = {
      total: '42',
      next: '2',
      operation: '+',
    };

    const buttonName = '=';

    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '44',
      next: null,
      operation: null,
    });
  });
});
