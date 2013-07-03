define( function( require ) {

    'use strict';

    var _ = require( 'underscore' ),
        $ = require( 'jquery' ),
        Backbone = require( 'backbone' ),
        BlogCollection = require( 'blog-collection' ),
        BlogListView = require( 'blog-list-view' );

    var view = Backbone.View.extend({

        el: $( '.app' ),
        hashList: [],
        contentList: null,

        initialize: function() {
            this.collection = new BlogCollection();
            var that = this;
            console.log('BlogListContainerView.js');
        },

        render: function() {

            var that = this;

            _.each( this.collection.models, function( model ){
                var post = new BlogListView({ model: model });
                that.$el.append( post.render() );
            }, this);

            return this;
        }

    });

    return view;
});