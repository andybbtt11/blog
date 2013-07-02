/************************************************************
 FILE: public/js/router.js
************************************************************/

define( function( require ) {

    'use strict';

    var Backbone = require( 'backbone' );

    var Router = Backbone.Router.extend({

        routes: {
            '' : 'test'
        },

        initialize: function(){
            console.log('router');
        },

        test: function(){
            console.log('tested');
        }
    });

    return new Router();
});