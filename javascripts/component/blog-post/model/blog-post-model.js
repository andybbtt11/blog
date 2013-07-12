define( function( require ) {

	'use strict';

	var Backbone = require( 'backbone' );

	var model = Backbone.Model.extend({

		urlRoot: '/blogging',

		defaults: function() {
			return {
				_id: null,
				title: 'Test title',
				subtitle: 'Test subtitle',
				content: 'Test content'
			};
		},

		initialize: function(){
		}
	});

	return model;
});