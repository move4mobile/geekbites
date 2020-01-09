const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

  eleventyConfig.addCollection('tagList', require('./_11ty/getTagList'));

//   eleventyConfig.addPassthroughCopy('src/css');

  // Filters
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  eleventyConfig.addFilter('ymd', dateObj => { // yearmonthdate
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'yyyy/MM/dd'
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // You can return your Config object (optional).
  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    permalink2: 'test/{{ mySlug }}',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
