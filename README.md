# @stgdp/ansi-codes

Get useful ANSI codes for use in your console

[![npm Version](https://img.shields.io/npm/v/@stgdp/ansi-codes?style=flat-square)](https://www.npmjs.com/package/@stgdp/ansi-codes)
[![Build Status](https://img.shields.io/travis/stgdp/ansi-codes?style=flat-square)](https://travis-ci.org/stgdp/ansi-codes)
[![License](https://img.shields.io/github/license/stgdp/ansi-codes?style=flat-square)](LICENSE)
[![Dependency Status](https://img.shields.io/david/stgdp/ansi-codes?style=flat-square)](https://david-dm.org/stgdp/ansi-codes)

`ansi-codes` is a Node.js module that supplies you with useful ANSI escape codes to format your terminal. Change the text color, background color, make the text bold, italic, underline and more.

## Installation

### With npm

```
npm install @stgdp/ansi-codes
```

### With yarn

```
yarn add @stgdp/ansi-codes
```

## Usage

```javascript
const ansiCodes = require( "@stgdp/ansi-codes" )

var format = ansiCodes.modifiers.bold + ansiCodes.bg.red + ansiCodes.fg.white

// Produces a bold console log with red background and white text
console.log( `${format}I'm formatted!${ansiCodes.reset.all} )
```

## Reference

All codes listed below are available without the escape prefix and suffix within `ansiCodes.codes` for further customisations

### Colors

| Foreground `ansiCodes.fg` | Background `ansiCodes.bg` | Bright Foreground `ansiCodes.fg.bright` | Bright Background `ansiCodes.bg.bright` |
| ------------------------- | ------------------------- | --------------------------------------- | --------------------------------------- |
| `black`                   | `black`                   | `black`                                 | `black`                                 |
| `red`                     | `red`                     | `red`                                   | `red`                                   |
| `green`                   | `green`                   | `green`                                 | `green`                                 |
| `yellow`                  | `yellow`                  | `yellow`                                | `yellow`                                |
| `blue`                    | `blue`                    | `blue`                                  | `blue`                                  |
| `magenta`                 | `magenta`                 | `magenta`                               | `magenta`                               |
| `cyan`                    | `cyan`                    | `cyan`                                  | `cyan`                                  |
| `white`                   | `white`                   | `white`                                 | `white`                                 |

### Misc

| Modifiers `ansiCodes.modifier` | Reset `ansiCodes.reset` | Escapes `ansiCodes.escape` |
| ------------------------------ | ----------------------- | -------------------------- |
| `bold`                         | `all`                   | `prefix`                   |
| `dim`                          | `bold`                  | `suffix`                   |
| `italic`                       | `dim`                   |                            |
| `underline`                    | `italic`                |                            |
| `inverse`                      | `underline`             |                            |
| `hidden`                       | `inverse`               |                            |
| `strike`                       | `hidden`                |                            |
| `frame`                        | `strike`                |                            |
| `encircle`                     | `fg`                    |                            |
| `overline`                     | `bg`                    |                            |
|                                | `frame`                 |                            |
|                                | `encircle`              |                            |
|                                | `overline`              |                            |

## License

```
MIT License

Copyright (c) 2020 Andrew Palfrey <apalfrey@apalfrey.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
