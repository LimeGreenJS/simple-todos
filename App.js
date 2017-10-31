import React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import TodoList from './TodoList';

const link = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cj98a57z515m50115c8of9cu7',
});
const client = new ApolloClient({ link });

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>TODOs</h1>
      <TodoList />
    </div>
  </ApolloProvider>
);

export default App;
