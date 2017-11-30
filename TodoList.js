import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';

const TodoList = ({ data: { loading, error, allTasks } }) => (
  loading ? <p>Loading...</p> :
  error ? <p>Error: {error.message}</p> : (
    <ul>
      <li><NewTodoForm /></li>
      {allTasks.map(task => (
        <li key={task.id}><TodoItem item={task} /></li>
      ))}
    </ul>
  )
);

export const QUERY_ALL_TASKS = gql`
{
  allTasks(orderBy: createdAt_DESC) {
    id
    title
    description
  }
}
`;

export default graphql(QUERY_ALL_TASKS)(TodoList);
