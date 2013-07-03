/************************************************************
 FILE: public/js/bootstrap.js
 ************************************************************/

require.config({

    paths: {

        // Libraries
        'underscore':   'lib/underscore',
        'jquery':       'lib/jquery',
        'backbone':     'lib/backbone',

        // App
        'app':      'app',
        'router':   'router',

        // Components
        'app-view-component':  'component/app/app-view-component',
        'app-view':  'component/app/view/AppView',
        'blog-list-component' : 'component/blog-list/blog-list-component',
        'blog-list-container-view' : 'component/blog-list/view/BlogListContainerView',
        'blog-list-view' : 'component/blog-list/view/BlogListView',
        'blog-model' : 'component/blog-list/model/blog-model',
        'blog-collection' : 'component/blog-list/collection/blog-collection'
    }

});

require([ 'main' ]);