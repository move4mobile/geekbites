const fetch = require('isomorphic-fetch');
var showdown = require('showdown'),
  converter = new showdown.Converter();

var query = `query Query($limit: Int) {
  items: Blogpost(limit: $limit) {
    id
    status
    user_created {
      first_name
      last_name
      avatar
    }
    Title
    publishDate
    permalink
    authorKey
    Content
  }
}`;

async function getData() {
  let results = await fetch(process.env.GRAPHQL_API, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      query,
    }),
  });
  let response = await results.json();

  const responseData = response.data.items.map(item => {
    return {
      date: item.publishDate ? new Date(item.publishDate) : null, // Example: convert to JavaScript Date object
      id: item.id,
      name: item.Title,
      author: item.authorKey,
      url: item.permalink,
      templateContent: converter.makeHtml(item.Content),
      data: {
        title: item.Title,
      },
    };
  });

  console.dir(responseData, { depth: null });
  return responseData;
}

// export for 11ty
module.exports = getData;
