import { GraphQLClient } from 'graphql-request';

<<<<<<< HEAD
const endpoint =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'http://is-canada-cms.local/graphql';
=======
const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://iscanada-local.local/graphql';
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {},
});

export default graphQLClient;
