'use strict'
import isPlainObj from 'is-plain-obj'
import stringSurround from 'string-surround'

/**
 * Replace a string's contents occurrences of keys of an object with the value of that key
 *
 * @param {String} str - string contents to replace
 * @param {Object} obj - key/value pairs to replace string contents
 * @param {String} [delimeter=''] - delimeter surrounding key name in string
 * @return {String} - string with replaced contents
 */
module.exports = (str, obj, delimeter = '') => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected string to be a string')
  }

  if (!isPlainObj(obj)) {
    throw new TypeError('Expected object to be a plain object')
  }

  return Object.keys(obj).reduce((acc, key) => {
    const regex = new RegExp(stringSurround(key, delimeter), 'g')

    return acc.replace(regex, obj[key])
  }, str)
}
