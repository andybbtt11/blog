define( function( require ) {

	'use strict';

	var _ = require( 'underscore' ),
		Backbone = require( 'backbone' ),
		BlogPost = require( 'blog-post-model' );

	var collection = Backbone.Collection.extend({

		url: '/blogging',

		model: BlogPost,

		initialize: function() {

		}

	});

	return collection;
});