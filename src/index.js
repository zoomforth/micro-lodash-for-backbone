const bind = require('lodash/bind');
const bindAll = require('lodash/bindAll');
const clone = require('lodash/clone');
const create = require('lodash/create');
const defaults = require('lodash/defaults');
const each = require('lodash/each');
const _escape = require('lodash/escape');
const extend = require('lodash/extend');
const has = require('lodash/has');
const invoke = require('lodash/invoke');
const isArray = require('lodash/isArray');
const isEmpty = require('lodash/isEmpty');
const isEqual = require('lodash/isEqual');
const isFunction = require('lodash/isFunction');
const isObject = require('lodash/isObject');
const isRegExp = require('lodash/isRegExp');
const isString = require('lodash/isString');
const iteratee = require('lodash/iteratee');
const keys = require('lodash/keys');
const map = require('lodash/map');
const matches = require('lodash/matches');
const once = require('lodash/once');
const pick = require('lodash/pick');
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
  create,
  defaults,
  each,
  'escape': _escape, // escape is a protected var
  extend,
  has,
  invoke,
  isArray,
  isEmpty,
  isEqual,
  isFunction,
  isObject,
  isRegExp,
  isString,
  iteratee,
  keys,
  map,
  matches,
  once,
  pick,
  result,
  size,
  some,
  sortBy,
  uniqueId
};