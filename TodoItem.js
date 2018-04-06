import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { QUERY_ALL_TASKS } from './TodoList';

const DELETE_TASK = gql`
mutation deleteTask($id: ID!) {
  deleteTask(id: $id) {
    id
  }
}
`;

const TodoItem = ({ item }) => (
  <Mutation
    mutation={DELETE_TASK}
    update={(cache, { data: { deleteTask } }) => {
      const data = cache.readQuery({ query: QUERY_ALL_TASKS });
      const index = data.allTasks.findIndex(task => task.id === deleteTask.id);
      if (index >= 0) {
        data.allTasks.splice(index, 1);
        cache.writeQuery({ query: QUERY_ALL_TASKS, data });
      }
    }}
  >
    {(deleteTask) => {
      const onClick = (event) => {
        deleteTask({ variables: { id: item.id } });
      };
      return (
        <div>
          {item.title} - {item.description}
          <button onClick={onClick}>Delete</button>
        </div>
      );
    }}
  </Mutation>
);

export default TodoItem;
