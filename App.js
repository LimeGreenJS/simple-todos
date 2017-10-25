import React from 'react';
import {
  createNetworkInterface,
  ApolloClient,
  ApolloProvider,
} from 'react-apollo';

import TodoList from './TodoList';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graphcms.com/simple/v1/cj95kuyzo1cwd012521echyb4',
});
const client = new ApolloClient({ networkInterface });

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>TODOs</h1>
      <TodoList />
    </div>
  </ApolloProvider>
);

export default App;
