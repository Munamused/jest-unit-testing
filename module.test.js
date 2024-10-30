import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

//|------------------------------ Testing for div ------------------------------|

test('Testing div basic -- success', () => {
  const expected = 5;
  const got = mut.div(15, 3);
  expect(got).toBe(expected);
});

test('Testing div first < second -- success', () => {
  const expected = 0.5;
  const got = mut.div(4, 8);
  expect(got).toBe(expected);
});

test('Testing div by 0 -- success', () => {
  const got = mut.div(10, 0);
  expect(got).toBe(Infinity);
});

test('Testing div one negative -- success', () => {
  const expected = -3;
  const got = mut.div(33, -11);
  expect(got).toBe(expected);
});

test('Testing div both negatives -- success', () => {
  const expected = 5;
  const got = mut.div(-20, -4);
  expect(got).toBe(expected);
});

test('Testing div invalid input -- success', () => {
  const got = mut.div('hey', -4);
  expect(got).toBe(NaN);
});

test('Testing div infinity -- success', () => {
  const got = mut.div(Infinity, 2);
  expect(got).toBe(Infinity);
});

//|------------------------------ Testing for containsNumbers ------------------------------|