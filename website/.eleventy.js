module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/assets/");
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },
        teplateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine:"njk",
    };
}