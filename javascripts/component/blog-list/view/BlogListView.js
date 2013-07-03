define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
        Backbone = require( 'backbone' );

    var view = Backbone.View.extend({

        tagName: 'div',

        events: {
        },

        initialize: function() {
            console.log('BlogListView.js');
        },

        render: function() { 
            this.$el.html("blog post " + this.model.get('title').toString());
            return this.el
        }

    });

    return view;
});