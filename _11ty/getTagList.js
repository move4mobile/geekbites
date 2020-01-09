module.exports = (collection) => {
  const tagSet = new Set();
  collection.getAll().forEach((item) => {
    if ("tags" in item.data) {
      let { tags } = item.data;

      tags = tags.filter((item) => {
        const filterOut = [
          "all",
          "nav",
          "post",
          "posts"
        ];
        return !filterOut.includes(item);
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet];
};
