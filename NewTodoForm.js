import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { QUERY_ALL_TASKS } from './TodoList';

const CREATE_TASK = gql`
mutation createTask($title: String!, $description: String) {
  createTask(title: $title, description: $description) {
    id
    title
    description
  }
}
`;

const NewTodoForm = () => (
  <Mutation
    mutation={CREATE_TASK}
    update={(cache, { data: { createTask } }) => {
      const data = cache.readQuery({ query: QUERY_ALL_TASKS });
      data.allTasks.unshift(createTask);
      cache.writeQuery({ query: QUERY_ALL_TASKS, data });
    }}
  >
    {(createTask) => {
      const onClick = (event) => {
        event.preventDefault();
        const title = event.target.parentNode.title.value;
        if (!title) return;
        const description = event.target.parentNode.description.value;
        createTask({ variables: { title, description } });
      };
      return (
        <form>
          <input name="title" />
          -
          <input name="description" />
          <button type="submit" onClick={onClick}>Add</button>
        </form>
      );
    }}
  </Mutation>
);

export default NewTodoForm;
