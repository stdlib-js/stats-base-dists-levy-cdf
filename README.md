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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Lévy][levy-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Lévy][levy-distribution] random variable is

<!-- <equation class="equation" label="eq:levy_cdf" align="center" raw="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) & \text{ for } x > \mu \\ 0 & \text{ otherwise } \end{cases}" alt="Cumulative distribution function for a Lévy distribution."> -->

```math
F(x;\mu,b) = \begin{cases} \mathop{\mathrm{erfc}}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) & \text{ for } x > \mu \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\mu,b) = \begin{cases} \operatorname{erfc}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) &amp; \text{ for } x &gt; \mu \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:levy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/cdf/docs/img/equation_levy_cdf.svg" alt="Cumulative distribution function for a Lévy distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-levy-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/levy/cdf.h"
```

#### stdlib_base_dists_levy_cdf( x, mu, c )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c > 0` (scale parameter).

```c
double out = stdlib_base_dists_levy_cdf( 2.0, 0.0, 1.0 );
// returns ~0.48
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **c**: `[in] double` scale parameter.

```c
double stdlib_base_dists_levy_cdf( const double x, const double mu, const double c );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/levy/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double x;
    double c;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -10.0, 10.0 );
        mu = random_uniform( -20.0, 0.0 );
        c = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_levy_cdf( x, mu, c );
        printf( "x: %lf, µ: %lf, c: %lf, F(x;µ,c): %lf\n", x, mu, c, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-levy-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-levy-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-levy-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-levy-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-levy-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-levy-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-levy-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-levy-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

</section>

<!-- /.links -->
