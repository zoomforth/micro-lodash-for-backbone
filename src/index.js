const bind = require('lodash/bind');
const bindAll = require('lodash/bindAll');
const clone = require('lodash/clone');
const countBy = require('lodash/countBy');
const create = require('lodash/create');
const defaults = require('lodash/defaults');
const each = require('lodash/each');
const _escape = require('lodash/escape');
const extend = require('lodash/extend');
const filter = require('lodash/filter');
const find = require('lodash/find');
const first = require('lodash/first');
const groupBy = require('lodash/groupBy');
const has = require('lodash/has');
const indexOf = require('lodash/indexOf');
const invoke = require('lodash/invoke');
const isArray = require('lodash/isArray');
const isEmpty = require('lodash/isEmpty');
const isEqual = require('lodash/isEqual');
const isFunction = require('lodash/isFunction');
const isObject = require('lodash/isObject');
const isRegExp = require('lodash/isRegExp');
const isString = require('lodash/isString');
const iteratee = require('lodash/iteratee');
const keyBy = require('lodash/keyBy');
const keys = require('lodash/keys');
const map = require('lodash/map');
const matches = require('lodash/matches');
const once = require('lodash/once');
const pick = require('lodash/pick');
const reject = require('lodash/reject');
const result = require('lodash/result');
const size = require('lodash/size');
const some = require('lodash/some');
const sortBy = require('lodash/sortBy');
const uniqueId = require('lodash/uniqueId');

// Don't use `export default {...}` because `lodash` uses `require(...)`
module.exports = {
  any: some,
  bind,
  bindAll,
  clone,
  countBy,
  create,
  defaults,
  each,
  'escape': _escape, // escape is a protected var
  extend,
  filter,
  find,
  first,
  groupBy,
  has,
  indexOf,
  invoke,
  isArray,
  isEmpty,
  isEqual,
  isFunction,
  isObject,
  isRegExp,
  isString,
  iteratee,
  keyBy,
  keys,
  map,
  matches,
  once,
  pick,
  reject,
  result,
  size,
  some,
  sortBy,
  uniqueId
};