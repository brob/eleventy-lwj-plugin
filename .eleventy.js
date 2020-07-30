const lwjContent = require('./plugin.js')
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(lwjContent, {
        blockquoteClass: 'something',
        headerFileType: "html",
        headerSelectors: ".centered h1, .centered h2"
    })
};