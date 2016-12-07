module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      temp: [
        'dist/js/libs.js',
        'dist/js/scripts*.js',
        'dist/index.min.html'
      ],
      all: ['dist/']
    },
    jshint: {
      dist: {
        src: ['js/**/*.js']
      }
    },
    concat: {
      scripts: {
        src: [
          'js/**/*.js',
          'lib/**/*.js'
        ],
        dest: 'dist/js/scripts.js'
      },
      libs: {
        src: [
          'node_modules/angular/angular.min.js',
          'node_modules/angular-route/angular-route.min.js',
          'node_modules/angular-messages/angular-messages.min.js',
          'node_modules/angular-i18n/angular-locale_pt-br.js'
        ],
        dest: 'dist/js/libs.js'
      },
      all: {
        src: [
          'dist/js/libs.js',
          'dist/js/scripts.min.js'
        ],
        dest: 'dist/js/all.min.js'
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'dist/js/scripts.min-safe.js':['dist/js/scripts.js']
        }
      }
    },
    uglify: {
      scripts: {
        src: ['dist/js/scripts.min-safe.js'],
        dest: 'dist/js/scripts.min.js'
      }
    },
    cssmin: {
      all: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'css/**/*.css'
        ],
        dest: 'dist/css/styles.css'
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      partials: {
        files: [{
          expand: true,
          cwd: 'view',
          src: ['*.html'],
          dest: 'dist/view'
        }]
      },
      principal: {
        files: {
          'dist/index.min.html':'index-prod.html'
        }
      }
    },
    copy: {
      all: {
        src: 'dist/index.min.html',
        dest: 'dist/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', ['clean:all', 'jshint', 'concat:scripts', 'ngAnnotate:app', 'concat:libs', 'uglify', 'cssmin', 'htmlmin:partials', 'htmlmin:principal', 'concat:all', 'copy', 'clean:temp']);
};
