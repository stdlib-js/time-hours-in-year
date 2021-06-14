<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# hoursInYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Determine the number of hours in a year according to the [Gregorian calendar][gregorian-calendar].

<section class="installation">

## Installation

```bash
npm install @stdlib/time-hours-in-year
```

</section>

<section class="usage">

## Usage

```javascript
var hoursInYear = require( '@stdlib/time-hours-in-year' );
```

#### hoursInYear( \[value] )

Returns the number of hours in a year according to the [Gregorian calendar][gregorian-calendar].

```javascript
var num = hoursInYear();
// returns <number>
```

By default, the function returns the number of hours in the current year (according to local time). To determine the number of hours for a particular year, provide either a year or a [`Date`][date-object] object.

```javascript
var num = hoursInYear( new Date() );
// returns <number>

num = hoursInYear( 2000 );
// returns 8784

num = hoursInYear( 2017 );
// returns 8760
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hoursInYear = require( '@stdlib/time-hours-in-year' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = hoursInYear( i );
    console.log( 'The year %d has %d hours.', i, v );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/time-hours-in-year
```

</section>

<section class="usage">

### Usage

```text
Usage: hours-in-year [options] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ hours-in-year
<number>
```

For a specific year,

```bash
$ hours-in-year 2016
8784
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-hours-in-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-hours-in-year

[test-image]: https://github.com/stdlib-js/time-hours-in-year/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/time-hours-in-year/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-hours-in-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-hours-in-year?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-hours-in-year
[dependencies-url]: https://david-dm.org/stdlib-js/time-hours-in-year/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-hours-in-year/main/LICENSE

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
