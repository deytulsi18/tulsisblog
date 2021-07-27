const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css"); 
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};