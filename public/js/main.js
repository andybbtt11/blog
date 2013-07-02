/************************************************************
 FILE: public/js/main.js
************************************************************/

define( function( require ) {
	'use strict';

	var $ = require( 'jquery' ),
		app = require( 'app' );

	$( function() {
		console.log('main.js');
		app.initialize();
	});
});