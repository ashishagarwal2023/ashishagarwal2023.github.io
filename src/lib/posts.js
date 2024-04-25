import { query } from "@/lib/hashnode";

export async function getAllPostSlugs() {
  const {
    data: { user },
  } = await query({
    query: `
      query{
  user(username: "ashishagarwal") {
    posts(pageSize: 20, page:1) {
        edges{
          node{
            slug
          }
        }
    }
  }
}
    `,
    variables: {},
  });
  const slugs = user?.posts?.edges?.map((edge) => edge.node.slug) ?? [];
  return slugs;
}

export async function getPostBySlug(slug) {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            author {
              name
              profilePicture
              socialMediaLinks {
                twitter
              }
            }
            content {
              html
            }
            coverImage {
              url
            }
            id
            publishedAt
            title
          }
        }
      }
    `,
    variables: {
      host: process.env.HASHNODE_HOST,
      slug,
    },
  });

  const post = publication?.post ?? null;

  return post;
}
