module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("lwjPosts", function(collectionApi) {
        return collectionApi.getFilteredByTag("lwjPost");
    });
    

};