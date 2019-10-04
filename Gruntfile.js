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
                tasks: ['sass', 'csslint', 'cssmin']
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
                esversion: 6,
                sub: true,
                globals:{
                    jQuery: true
                }
            }
        },
        csslint: {
            lax: {
                options: {
                    import: 2,
                    'order-alphabetical': false,
                    important: false,
                },
                src: ['css/*.css', '!css/*.min.css']
            }
        }
    });

    //grunt.loadNpmTasks();
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    //grunt.registerTasks();
    grunt.registerTask('compile', ['sass']);
    grunt.registerTask('min', ['cssmin', 'uglify']);
    grunt.registerTask('setup', ['sass', 'cssmin', 'uglify']);
    grunt.registerTask('check', ['jshint', 'csslint']);
    grunt.registerTask('default', ['watch']);

};
