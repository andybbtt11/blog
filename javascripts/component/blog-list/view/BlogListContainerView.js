define( function( require ) {

    'use strict';

    var _ = require( 'underscore' ),
        $ = require( 'jquery' ),
        Backbone = require( 'backbone' ),
        BlogCollection = require( 'blog-collection' ),
        BlogListView = require( 'blog-list-view' );

    var view = Backbone.View.extend({

        el: $( '.list' ),

        initialize: function() {
            var that = this;

            this.collection = new BlogCollection();

            if( this.collection.length === 0 ){
                this.collection.fetch({
                    success: function(){
                        that.render();
                    }
                });
            } else {
                this.render();
            }
            
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