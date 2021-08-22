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

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Lévy][levy-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Lévy][levy-distribution] random variable is

<!-- <equation class="equation" label="eq:levy_cdf" align="center" raw="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) & \text{ for } x > \mu \\ 0 & \text{ otherwise } \end{cases}" alt="Cumulative distribution function for a Lévy distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) &amp; \text{ for } x &gt; \mu \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:levy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/cdf/docs/img/equation_levy_cdf.svg" alt="Cumulative distribution function for a Lévy distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-levy-cdf
```

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-levy-cdf' );
```

#### cdf( x, mu, c )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```javascript
var y = cdf( 2.0, 0.0, 1.0 );
// returns ~0.48

y = cdf( 12.0, 10.0, 3.0 );
// returns ~0.221

y = cdf( 9.0, 10.0, 3.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `c <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### cdf.factory( mu, c )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```javascript
var mycdf = cdf.factory( 3.0, 1.5 );

var y = mycdf( 4.0 );
// returns ~0.22

y = mycdf( 2.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var cdf = require( '@stdlib/stats-base-dists-levy-cdf' );

var mu;
var c;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    mu = randu() * 10.0;
    x = ( randu()*10.0 ) + mu;
    c = ( randu()*10.0 ) + EPS;
    y = cdf( x, mu, c );
    console.log( 'x: %d, µ: %d, c: %d, F(x;µ,c): %d', x.toFixed( 4 ), mu.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-levy-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-levy-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-levy-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-levy-cdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-levy-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-levy-cdf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-levy-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

</section>

<!-- /.links -->
