module.exports = function(grunt) {
  // Do grunt-related things in here
  //grunt configs
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css':'scss/style.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    watch:{
      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['js/*.js', '!js/*.min.js'],
        tasks: ['jshint', 'uglify']
      }
    },
    uglify:{
        my_target:{
            files: {
                'js/script.min.js':['js/script.js']
            }
        }
    },
    jshint: {
        files: ['*.js', 'js/script.js'],
        options: {
            globals:{
                jQuery: true
            }
        }
    },
  });

  //grunt.loadNpmTasks();
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  //grunt.registerTasks();
  grunt.registerTask('compile', ['sass']);
  grunt.registerTask('min', ['cssmin', 'uglify']);
  grunt.registerTask('all', ['sass', 'cssmin']);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('setup', ['sass', 'cssmin', 'uglify']);
  grunt.registerTask('check', ['jshint']);









};
