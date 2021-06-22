import { ApolloClient } from '@apollo/client';
import cache from './graphql/cache';

const client = new ApolloClient({
  uri:'http://localhost:8080/graphql',
  cache,
  connectToDevTools: true,
});

export default client;