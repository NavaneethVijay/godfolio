async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.storyCollection?.items;
}

export async function getAllPosts(isDraftMode?: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
        storyCollection(
    skip: 0
    limit: 100
    where: {}
    order: [published_date_DESC]
  ) {
    total
    skip
    limit
    items {
      sys {
        publishedAt
      }
      title
      tags
      path
      publishedDate
    }
  }
    }`,
    isDraftMode,
  );
  return extractPostEntries(entries);
}

export async function getBlogPost(slug: string) {

  const post = await fetchGraphQL(
    `
    query{
     storyCollection(
    skip: 0
    limit: 1
    where: {
      path: "${slug}"
    }
  ) {
    total
    skip
    limit
    items {
      sys {
        publishedAt
      }
      title
      tags
      content{
        json
      }
      path
      publishedDate
    }
  }
    }
    `
  );
  return extractPostEntries(post)
}

export async function fetchAssest(id: string){
  const asset = await fetchGraphQL(
    `
    query{
      asset(id: "${id}") {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
    `
  )
  return asset.data
}
