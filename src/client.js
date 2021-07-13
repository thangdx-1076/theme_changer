import { ApolloClient } from '@apollo/client';
import cache from './graphql/cache';
import { WebSocketLink } from '@apollo/client/link/ws';

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:7070/graphql',
  options: {
    reconnect: true
  }
});
const client = new ApolloClient({
  uri:'http://localhost:7070/graphql',
  link: wsLink,
  cache,
  connectToDevTools: true,
});

export default client;