module.exports = function(grunt) {

  grunt.initConfig({
    compass: {                  // Task
      dist:{
        options: {
          config: 'config/config.rb',
          cssDir: 'public/css',
          sassDir: 'sass',
          environment: 'production',
          outputStyle:'expanded'
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js']
    },

    watch: {
      scss: {
        files: ['sass/*.scss'],
        tasks: [ 'compass:dist']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'compass', 'watch']);

};