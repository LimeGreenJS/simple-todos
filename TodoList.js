import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';

export const QUERY_ALL_TASKS = gql`
{
  allTasks(orderBy: createdAt_DESC) {
    id
    title
    description
  }
}
`;

const TodoList = () => (
  <Query query={QUERY_ALL_TASKS}>
    {({ loading, error, data }) => (
      loading ? <p>Loading...</p> :
      error ? <p>Error: {error.message}</p> : (
        <ul>
          <li><NewTodoForm /></li>
          {data.allTasks.map(task => (
            <li key={task.id}><TodoItem item={task} /></li>
          ))}
        </ul>
      )
    )}
  </Query>
);


export default TodoList;
