/************************************************************
 FILE: public/js/app.js
************************************************************/

define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		$ = require( 'jquery' ),
		Backbone = require( 'backbone' ),
		router = require( 'router' );

	return {
		initialize: function() {
           console.log('app.js');
           Backbone.history.start({ pushState: true, root: '/' });
		}
	};	

});