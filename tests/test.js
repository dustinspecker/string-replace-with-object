'use strict'
import test from 'ava'

import stringReplaceWithObject from '../lib/'

test('it should throw TypeError if string is not a string', t => {
  t.throws(stringReplaceWithObject, TypeError)
  t.throws(stringReplaceWithObject, /Expected string to be a string/)
})

test('it should throw TypeError if object is not a plain object', t => {
  const notObject = () => stringReplaceWithObject('hey', [])

  t.throws(notObject, TypeError)
  t.throws(notObject, /Expected object to be a plain object/)
})

test('it should replace string contents with object keys/values', t => {
  const aString = stringReplaceWithObject('hello', {hello: 'cat'})
  const bString = stringReplaceWithObject('hello world', {hello: 'cat', wor: 'dog'})

  t.is(aString, 'cat')
  t.is(bString, 'cat dogld')
})

test('it should replace all occurrences of key in str', t => {
  const aString = stringReplaceWithObject('hellohello', {hello: 'cat'})

  t.is(aString, 'catcat')
})

test('it supports custom delimeters', t => {
  const aString = stringReplaceWithObject('__hello____hello__', {hello: 'cat'}, '__')

  t.is(aString, 'catcat')
})
