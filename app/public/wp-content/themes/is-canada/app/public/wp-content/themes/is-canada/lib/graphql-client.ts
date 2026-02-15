import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://iscanada-local.local/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {},
});

export default graphQLClient;
