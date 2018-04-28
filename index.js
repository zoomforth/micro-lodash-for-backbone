'use strict';

var bind = require('lodash/bind');
var bindAll = require('lodash/bindAll');
var clone = require('lodash/clone');
var countBy = require('lodash/countBy');
var create = require('lodash/create');
var defaults = require('lodash/defaults');
var each = require('lodash/each');
var _escape = require('lodash/escape');
var extend = require('lodash/extend');
var filter = require('lodash/filter');
var find = require('lodash/find');
var first = require('lodash/first');
var groupBy = require('lodash/groupBy');
var has = require('lodash/has');
var invoke = require('lodash/invoke');
var isArray = require('lodash/isArray');
var isEmpty = require('lodash/isEmpty');
var isEqual = require('lodash/isEqual');
var isFunction = require('lodash/isFunction');
var isObject = require('lodash/isObject');
var isRegExp = require('lodash/isRegExp');
var isString = require('lodash/isString');
var iteratee = require('lodash/iteratee');
var keyBy = require('lodash/keyBy');
var keys = require('lodash/keys');
var map = require('lodash/map');
var matches = require('lodash/matches');
var once = require('lodash/once');
var pick = require('lodash/pick');
var reject = require('lodash/reject');
var result = require('lodash/result');
var size = require('lodash/size');
var some = require('lodash/some');
var sortBy = require('lodash/sortBy');
var uniqueId = require('lodash/uniqueId');

// Don't use `export default {...}` because `lodash` uses `require(...)`
module.exports = {
  any: some,
  bind: bind,
  bindAll: bindAll,
  clone: clone,
  countBy: countBy,
  create: create,
  defaults: defaults,
  each: each,
  'escape': _escape, // escape is a protected var
  extend: extend,
  filter: filter,
  find: find,
  first: first,
  groupBy: groupBy,
  has: has,
  invoke: invoke,
  isArray: isArray,
  isEmpty: isEmpty,
  isEqual: isEqual,
  isFunction: isFunction,
  isObject: isObject,
  isRegExp: isRegExp,
  isString: isString,
  iteratee: iteratee,
  keyBy: keyBy,
  keys: keys,
  map: map,
  matches: matches,
  once: once,
  pick: pick,
  reject: reject,
  result: result,
  size: size,
  some: some,
  sortBy: sortBy,
  uniqueId: uniqueId
};