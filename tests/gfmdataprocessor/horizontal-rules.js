/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { testDataProcessor as test } from '../../tests/_utils/utils';

describe( 'GFMDataProcessor', () => {
	// Horizontal rules are are always rendered by GitHub as <hr> and normalized when converting
	// back to * * *.
	describe( 'horizontal rules', () => {
		describe( 'dashes', () => {
			it( '#1', () => {
				test( '---', '<hr></hr>', '* * *' );
			} );

			it( '#2', () => {
				test( ' ---', '<hr></hr>', '* * *' );
			} );

			it( '#3', () => {
				test( '  ---', '<hr></hr>', '* * *' );
			} );

			it( '#4', () => {
				test( '   ---', '<hr></hr>', '* * *' );
			} );

			it( '#5 - code', () => {
				test(
					'    ---',

					// Four spaces are interpreted as code block.
					'<pre><code>---</code></pre>',

					// Code block will be normalized to ``` representation.
					'```\n' +
					'---\n' +
					'```'
				);
			} );
		} );

		describe( 'dashes with spaces', () => {
			it( '#1', () => {
				test( '- - -', '<hr></hr>', '* * *' );
			} );

			it( '#2', () => {
				test( ' - - -', '<hr></hr>', '* * *' );
			} );

			it( '#3', () => {
				test( '  - - -', '<hr></hr>', '* * *' );
			} );

			it( '#4', () => {
				test( '   - - -', '<hr></hr>', '* * *' );
			} );

			it( '#5 - code', () => {
				test(
					'    - - -',

					// Four spaces are interpreted as code block.
					'<pre><code>- - -</code></pre>',

					// Code block will be normalized to ``` representation.
					'```\n' +
					'- - -\n' +
					'```'
				);
			} );
		} );

		describe( 'asterisks', () => {
			it( '#1', () => {
				test( '***', '<hr></hr>', '* * *' );
			} );

			it( '#2', () => {
				test( ' ***', '<hr></hr>', '* * *' );
			} );

			it( '#3', () => {
				test( '  ***', '<hr></hr>', '* * *' );
			} );

			it( '#4', () => {
				test( '   ***', '<hr></hr>', '* * *' );
			} );

			it( '#5 - code', () => {
				test(
					'    ***',

					// Four spaces are interpreted as code block.
					'<pre><code>***</code></pre>',

					// Code block will be normalized to ``` representation.
					'```\n' +
					'***\n' +
					'```'
				);
			} );
		} );

		describe( 'asterisks with spaces', () => {
			it( '#1', () => {
				test( '* * *', '<hr></hr>', '* * *' );
			} );

			it( '#2', () => {
				test( ' * * *', '<hr></hr>', '* * *' );
			} );

			it( '#3', () => {
				test( '  * * *', '<hr></hr>', '* * *' );
			} );

			it( '#4', () => {
				test( '   * * *', '<hr></hr>', '* * *' );
			} );

			it( '#5 - code', () => {
				test(
					'    * * *',

					// Four spaces are interpreted as code block.
					'<pre><code>* * *</code></pre>',

					// Code block will be normalized to ``` representation.
					'```\n' +
					'* * *\n' +
					'```'
				);
			} );
		} );

		describe( 'underscores', () => {
			it( '#1', () => {
				test( '___', '<hr></hr>', '* * *' );
			} );

			it( '#2', () => {
				test( ' ___', '<hr></hr>', '* * *' );
			} );

			it( '#3', () => {
				test( '  ___', '<hr></hr>', '* * *' );
			} );

			it( '#4', () => {
				test( '   ___', '<hr></hr>', '* * *' );
			} );

			it( '#5 - code', () => {
				test(
					'    ___',

					// Four spaces are interpreted as code block.
					'<pre><code>___</code></pre>',

					// Code block will be normalized to ``` representation.
					'```\n' +
					'___\n' +
					'```'
				);
			} );
		} );

		describe( 'underscores with spaces', () => {
			it( '#1', () => {
				test( '_ _ _', '<hr></hr>', '* * *' );
			} );

			it( '#2', () => {
				test( ' _ _ _', '<hr></hr>', '* * *' );
			} );

			it( '#3', () => {
				test( '  _ _ _', '<hr></hr>', '* * *' );
			} );

			it( '#4', () => {
				test( '   _ _ _', '<hr></hr>', '* * *' );
			} );

			it( '#5 - code', () => {
				test(
					'    _ _ _',

					// Four spaces are interpreted as code block.
					'<pre><code>_ _ _</code></pre>',

					// Code block will be normalized to ``` representation.
					'```\n' +
					'_ _ _\n' +
					'```'
				);
			} );
		} );
	} );
} );
