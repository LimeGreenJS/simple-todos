import React from 'react';
import ApolloClient, { HttpLink } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';

import TodoList from './TodoList';

const link = new HttpLink({
  uri: 'https://api.graphcms.com/simple/v1/cj95kuyzo1cwd012521echyb4',
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
