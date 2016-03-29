# string-replace-with-object
[![NPM version](https://badge.fury.io/js/string-replace-with-object.svg)](https://badge.fury.io/js/string-replace-with-object) [![Build Status](https://travis-ci.org/dustinspecker/string-replace-with-object.svg)](https://travis-ci.org/dustinspecker/string-replace-with-object) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/string-replace-with-object.svg)](https://coveralls.io/r/dustinspecker/string-replace-with-object?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/string-replace-with-object/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/string-replace-with-object) [![Dependencies](https://david-dm.org/dustinspecker/string-replace-with-object.svg)](https://david-dm.org/dustinspecker/string-replace-with-object/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/string-replace-with-object/dev-status.svg)](https://david-dm.org/dustinspecker/string-replace-with-object/#info=devDependencies&view=table)

> Replace contents of string with key/values from object

## Install
```
npm install --save string-replace-with-object
```

## Usage
```javascript
import stringReplaceWithObject from 'string-replace-with-object'

stringReplaceWithObject('hello', {hello: 'cat'})
// => 'cat'

stringReplaceWithObject('hello world', {hello: 'goodbye', world: 'sky'})
// => 'goodbye sky'

stringReplaceWithObject('hello hello', {hello: 'hey'})
// => 'hey hey'

stringReplaceWithObject('__hello__', {hello: 'yo'}, '__')
// => 'yo'
```

## API

### stringReplaceWithObject(str, obj, [delimeter])

Returns a string with replaced contents where key name occurrences are replaced with the key value.

#### str
type: `string`

A string to replace the contents of.

#### obj
type: `object`

An object with key/value pairs to replace the contents of `str`.

#### delimeter
type: `string`

default: `''`

A delimeter to surround both sides of key names when searching string. For example, a `str` value of `xYhelloxY`, an `obj` of `{hello: 'cat'}`, and a `delimeter` of `xY` would result in `cat`.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
