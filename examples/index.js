/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var cdf = require( './../lib' );

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
