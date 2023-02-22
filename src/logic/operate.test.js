import operate from './operate';

describe('adding two number together', () => {
  it('should return a string', () => {
    expect(typeof operate(2, 4, '+')).toBe('string');
  });

  it('should increase by the amount adding', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });

  it('should decrease by the amount adding if the negative number is greater and be a negative number', () => {
    expect(operate(2, -4, '+')).toBe('-2');
  });
});

describe('substracting two number together', () => {
  it('should return a string', () => {
    expect(typeof operate(2, 4, '-')).toBe('string');
  });

  it('should decrease by the amount adding', () => {
    expect(operate(2, 4, '-')).toBe('-2');
  });

  it('should decrease by the amount adding', () => {
    expect(operate(4, 4, '-')).toBe('0');
  });

  it('should decrease by the amount adding', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });
});

describe('multiplying two number together', () => {
  it('should return a string', () => {
    expect(typeof operate(2, 4, 'x')).toBe('string');
  });

  it('should increase by the amount multiplying', () => {
    expect(operate(2, 4, 'x')).toBe('8');
  });

  it('should return a positive number when the two numbers are negatives', () => {
    expect(operate(-2, -4, 'x')).toBe('8');
  });

  it('should return a negative number when one of the numbers is negative', () => {
    expect(operate(-2, 4, 'x')).toBe('-8');
  });
});

describe('dividing two number together', () => {
  it('should return a string', () => {
    expect(typeof operate(2, 4, '÷')).toBe('string');
  });

  it('should decrease by the amount dividing', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  it('should not divide by zero', () => {
    expect(operate(4, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('should return a positive number when the two numbers are negatives', () => {
    expect(operate(-4, -4, '÷')).toBe('1');
  });

  it('should return a negative number when one of the numbers is negative', () => {
    expect(operate(-4, 2, '÷')).toBe('-2');
  });

  describe('modulo two number together', () => {
    it('should return a string', () => {
      expect(typeof operate(3, 2, '%')).toBe('string');
    });

    it('should return 1', () => {
      expect(operate(3, 2, '%')).toBe('1');
    });
  });
});
