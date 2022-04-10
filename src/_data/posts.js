const fetch = require('isomorphic-fetch');

var query = `query Query($limit: Int) {
  items: Blogpost(limit: $limit) {
    id
    title
    date_created
    author {
      first_name
      last_name
      avatar
      id
      last_access
    }
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
      date: item.date_created,
      id: item.id,
      name: item.title,
      // imageUrl: item.imageUrl,
      artist: item.author.first_name,
      // popularity: item.popularity,
    };
  });

  console.dir(responseData, { depth: null });
  return responseData;
}

// export for 11ty
module.exports = getData;
