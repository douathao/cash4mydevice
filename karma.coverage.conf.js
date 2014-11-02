/* global module */
// Karma configuration
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // Angular & 3rd party lib
      'public/bower_components/jquery/dist/jquery.min.js',
      'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.js',

      // App
      'public/app/app.js',
      // index have to be first for each module
      'public/app/**/index.js',
      'public/app/**/controllers.js',
      'public/app/**/filters.js',
      'public/app/**/services.js',
      'public/app/**/directives.js',
      'public/app/**/config.js',

      // Tests
      'test/client/unit/**/*Spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'public/app/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'public/coverage',
      subdir: '.'
      //      subdir: function(browser) {
      //        // normalization process to keep a consistent browser name accross different
      //        // OS
      //        return browser.toLowerCase().split(/[ /-]/)[0];
      //      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};