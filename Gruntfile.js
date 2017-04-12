'use strict';
module.exports = function (grunt) {
    // load jshint plugin
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-open');
    //Files for sass task
    var sassFiles = {
        'bower_components/bootstrap-sass/assets/dist/css/main.css': 'bower_components/bootstrap-sass/assets/stylesheets/main.scss'
    };
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: 'jshintrc.json',
                reporterOutput: ""
            },
            all: [
                'Gruntfile.js',
                'bower_components/bootstrap-sass/assets/dist/js/**/*.js',
                '!bower_components/bootstrap-sass/assets/dist/js/vendor/**/*.js'
            ]
        },
        sass: {

            options: {
                //location where sass-cache is placed
                cacheLocation: 'bower_components/bootstrap-sass/assets/dist/.sass-cache'
            },
            //sass for dev callled  sass:dev
            dev: {
                options: {
                    style: 'expanded',
                    lineComments: true
                },
                files: sassFiles
            },
            //sass for prod callled  sass:prod
            prod: {
                options: {
                    style: 'compressed'
                },
                files: sassFiles
            }

        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    base: 'bower_components/bootstrap-sass/assets/dist',
                    livereload: true
                }
            }
        },
        watch: {
            css: {
                files: 'bower_components/bootstrap-sass/assets/stylesheets/**/*.scss',
                tasks: ['sass:dev']
            },
            js: {
                files: ['bower_components/bootstrap-sass/assets/dist/js/filesjs/**'],
                tasks: ['jshint']
            }

        },
        open: {
            server: {
                path: 'http://localhost:8080'
            }
        },
        clean: {
            all: ['bower_components/bootstrap-sass/assets/dist/css']
        }
    });
    grunt.registerTask('server', 'Run a server', [


        'jshint',
        'clean',
        'sass:dev',
        'open:server',
        'connect:server',
        'watch'



        ]);

};
