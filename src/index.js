import any from 'lodash/any';
import bind from 'lodash/bind';
import bindAll from 'lodash/bindAll';
import clone from 'lodash/clone';
import defaults from 'lodash/defaults';
import each from 'lodash/each';
import _escape from 'lodash/escape';
import has from 'lodash/has';
import invoke from 'lodash/invoke';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import keys from 'lodash/keys';
import map from 'lodash/map';
import once from 'lodash/once';
import pick from 'lodash/pick';
import result from 'lodash/result';
import uniqueId from 'lodash/uniqueId';


export default {
  any,
  bind,
  bindAll,
  clone,
  defaults,
  each,
  'escape': _escape, // escape is a protected var
  has,
  invoke,
  isArray,
  isEmpty,
  isEqual,
  isFunction,
  isObject,
  isRegExp,
  isString,
  keys,
  map,
  once,
  pick,
  result,
  uniqueId
}