define( function( require ) {

	'use strict';

	var BlogListContainterView = require( 'blog-list-container-view' );

	return function() {
		var blogListContainterView = new BlogListContainterView();
		blogListContainterView.render();
	};
});