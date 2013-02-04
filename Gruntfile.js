module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    concat: {
      options: {
        separator: '\n',
      },
      'x-tag-js': {
        src: [
          'components/document.register/src/document.register.js', 
          'components/x-tag-core/src/core.js',
          'components/x-tag-growbox/src/growbox.js',
          'components/x-tag-slidebox/src/slidebox.js',
          'components/x-tag-code-prism/src/code-prism.js'
        ],
        dest: 'public/js/x-tag-components.js'
      },
      'x-tag-css': {
        src: [
          'components/x-tag-growbox/src/growbox.css',
          'components/x-tag-slidebox/src/slidebox.css',
          'components/x-tag-code-prism/src/code-prism.css'
        ],
        dest: 'public/css/x-tag-components.css'
      }
    },
    uglify: {
      'x-tag-js': {
        files: {
          'public/js/x-tag-components.min.js' : ['public/js/x-tag-components.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('build', ['concat:x-tag-js', 'concat:x-tag-css', 'uglify:x-tag-js']);


};