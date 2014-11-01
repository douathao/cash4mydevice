module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
     * JSHint config
     */
    jshint: {
      all: [
        'public/app/**/*.js',
        'public/app/app.js',
        '!public/app/app.min.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    /**
     * Concat config
     **/
    concat: {
      dist: {
        src: [
          'public/app/app.js',
          // index have to be first for each module
          'public/app/**/index.js',
          'public/app/**/controllers.js',
          'public/app/**/filters.js',
          'public/app/**/services.js',
          'public/app/**/directives.js',
          'public/app/**/config.js'
        ],
        dest: 'public/app/app.min.js'
      }
    },
    /**
     * Uglify config
     */
    uglify: {
      development: {
        options: {
          beautify: true
        },
        files: {
          'public/app/app.min.js': ['public/app/app.min.js']
        }
      },
      build: {
        options: {
          //          sourceMap: true,
          //          sourceMapName: 'public/app/app.map',
          //          sourceMapIncludeSources: true,
          compress: {
            /* jshint camelcase:false */
            drop_console: true
          }
        },
        files: {
          'public/app/app.min.js': ['public/app/app.min.js']
        }
      }
    },
    /**
     * Jade config
     **/
    jade: {
      compile: {
        files: [{
          expand: true,
          cwd: 'public/app/',
          src: '**/*.jade',
          dest: 'public/app/',
          ext: '.html'
        }]
      }
    },
    /**
     * Watch config
     **/
    watch: {
      jade: {
        files: 'public/app/**/*.jade',
        tasks: ['jade']
      },
      js: {
        files: 'public/app/**/*.js',
        tasks: ['jshint', 'concat', 'uglify:development']
      }
    }
  });

  // Load NPM tasks
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'jade', 'uglify:development', 'watch']);

  // Build - for production
  grunt.registerTask('build', ['concat', 'jade', 'uglify:build']);
};