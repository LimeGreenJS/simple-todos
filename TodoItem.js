import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { QUERY_ALL_TASKS } from './TodoList';

const TodoItem = ({ item, mutate }) => {
  const onClick = (event) => {
    mutate({ variables: { id: item.id } });
  };
  return (
    <div>
      {item.title} - {item.description}
      <button onClick={onClick}>Delete</button>
    </div>
  );
};

const DELETE_TASK = gql`
mutation deleteTask($id: ID!) {
  deleteTask(id: $id) {
    id
  }
}
`;

const config = {
  options: {
    update: (proxy, { data: { deleteTask } }) => {
      const data = proxy.readQuery({ query: QUERY_ALL_TASKS });
      const index = data.allTasks.findIndex(task => task.id === deleteTask.id);
      if (index >= 0) {
        data.allTasks.splice(index, 1);
        proxy.writeQuery({ query: QUERY_ALL_TASKS, data });
      }
    },
  },
};

export default graphql(DELETE_TASK, config)(TodoItem);
