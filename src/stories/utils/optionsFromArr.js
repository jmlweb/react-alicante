import { reduce } from 'ramda';

/**
 * Transform an array of options into an object
 * @example
 * optionsFromArr([
 *  'flex-start',
 *  'flex-end',
 *  'center',
 *  'stretch',
 *  'inherit',
 * ]);
 */
const optionsFromArr = reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: curr,
  }),
  {},
);

export default optionsFromArr;
