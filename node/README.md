# currencies
Package for iso currencies, supports multiple languages

## Installation

`npm install iso-currencies --save`

## Usage

```js
  var currencies = require('iso-currences')


  console.log(currencies.list())
  console.log(currencies.information("AED"))
  console.log(currencies.isValid("aed"))
```

## Tests

`npm test`