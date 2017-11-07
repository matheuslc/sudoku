import test from 'ava';
import validator from '../src/js/validator';


test.before(t => {
  // This runs before all tests
});

test('should be a number between 1 and 9', async t => {
  t.is(validator.validateInputValue(1), true);
});

test('should be an invalid number format input', async t => {
  t.is(validator.validateInputValue('a'), false);
});

test('should be an invalid minimum range input', async t => {
  t.is(validator.validateInputValue(0), false);
});

test('should be an invalid maximum range input', async t => {
  t.is(validator.validateInputValue(10), false);
});

test('when not have a repeated number return true', async t => {
  t.is(validator.validateDuplicateValue([1, 2], 9), true)
});

test('when have a repeated number return false', async t => {
  t.is(validator.validateDuplicateValue([5, 1], 1), false)
});


