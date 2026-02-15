import { GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'http://is-canada-cms.local/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {},
});

export default graphQLClient;
