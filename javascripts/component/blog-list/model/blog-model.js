define( function( require ) {

	'use strict';

	var Backbone = require( 'backbone' );

	var model = Backbone.Model.extend({

		urlRoot: '/blogging',

		defaults: function() {
			return {
				title: 'Test title',
				subtitle: 'Test subtitle'
			};
		},

		initialize: function(){
		}
	});

	return model;
});