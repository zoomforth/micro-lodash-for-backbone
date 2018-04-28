import bind from 'lodash/bind';
import bindAll from 'lodash/bindAll';
import clone from 'lodash/clone';
import create from 'lodash/create';
import defaults from 'lodash/defaults';
import each from 'lodash/each';
import _escape from 'lodash/escape';
import extend from 'lodash/extend';
import has from 'lodash/has';
import invoke from 'lodash/invoke';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import iteratee from 'lodash/iteratee';
import keys from 'lodash/keys';
import map from 'lodash/map';
import matches from 'lodash/matches';
import once from 'lodash/once';
import pick from 'lodash/pick';
import result from 'lodash/result';
import size from 'lodash/size';
import some from 'lodash/some';
import uniqueId from 'lodash/uniqueId';


export default {
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
  uniqueId
};