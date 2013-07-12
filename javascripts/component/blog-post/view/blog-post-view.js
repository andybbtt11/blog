define( function( require ) {

    'use strict';

    var $ = require( 'jquery' ),
       _ = require( 'underscore' ),
       Backbone = require( 'backbone' ),
       BlogPostCollection = require( 'blog-post-collection' );

    var view = Backbone.View.extend({

        el: '.post',

        post: window.location.hash.substring(1),

        events: {
        },

        initialize: function() {
            var that = this;
            this.collection = new BlogPostCollection();
            this.template = _.template(tpl.get('blog-post'));
            //this.bind('reset', this.render, this);  
            this.collection.fetch().complete(function(){
                that.render();
            });

        },

        render: function() { 
            this.$el.html( this.template( this.collection.get(this.post).toJSON() ));
            return this.el

        }

    });

    return view;
});