// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            css : { dirs: [ "build" ] }
        },
        less: {
            all: {
                files: {
                    'server/public/css/base.styles.css': 'server/public/css/base.styles.less',
                    'build/*.css': 'client/**/*.less'
                },
                options: {
                    yuicompress: true
                }
            }
        },
        mincss: {
            compress: {
                files: {
                    "server/public/css/gv-min.css": [
                        "server/public/css/bootstrap.css",
                        "server/public/css/base.styles.css",
                        "build/app/**/*.css"
                    ]
                }
            }
        },
        jasmine: {
            index: ['tests/specrunner.html']
        }
    });

    grunt.loadNpmTasks('grunt-cleanx');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-jasmine-task');

    grunt.registerTask('default', 'clean less mincss clean');

};
