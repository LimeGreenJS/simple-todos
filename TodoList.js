import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import TodoItem from './TodoItem';

const TodoList = ({ data: { loading, error, allTasks } }) => (
  loading ? <p>Loading...</p> :
  error ? <p>Error: {error.message}</p> : (
    <ul>
      {allTasks.map(task => (
        <li key={task.id}><TodoItem item={task} /></li>
      ))}
    </ul>
  )
);

const query = gql`
{
  allTasks(orderBy: date_ASC) {
    id
    title
    date
    description
  }
}
`;

export default graphql(query)(TodoList);
