module.exports = function(eleventyConfig) {


    // Get only content that matches a tag
    eleventyConfig.addCollection("lwjPosts", function(collectionApi) {
      return collectionApi.getFilteredByTag("lwjPost");
    });
    

  };