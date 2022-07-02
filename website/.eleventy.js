module.exports = function(eleventyConfig) {
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