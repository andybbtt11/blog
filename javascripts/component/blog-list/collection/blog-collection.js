define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		Backbone = require( 'backbone' ),
		Blog = require( 'blog-model' );

	var collection = Backbone.Collection.extend({

		url: '/blogging',

		model: Blog,

		initialize: function() {
			// Figure out how to populate
		}

	});

	return collection;
});