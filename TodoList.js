import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const TodoList = ({ data: { loading, error, allTasks } }) => (
  loading ? <p>Loading...</p> :
  error ? <p>Error: {error}</p> : (
    <ul>
      {allTasks.map(task => (
        <li key={task.id}>{task.title} - {task.description}</li>
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
