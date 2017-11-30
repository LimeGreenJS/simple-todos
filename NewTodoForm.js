import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { QUERY_ALL_TASKS } from './TodoList';

const NewTodoForm = ({ mutate }) => {
  const onClick = (event) => {
    event.preventDefault();
    const title = event.target.parentNode.title.value;
    if (!title) return;
    const description = event.target.parentNode.description.value;
    mutate({ variables: { title, description } });
  };
  return (
    <form>
      <input name="title" />
      -
      <input name="description" />
      <button type="submit" onClick={onClick}>Add</button>
    </form>
  );
};

const CREATE_TASK = gql`
mutation createTask($title: String!, $description: String) {
  createTask(title: $title, description: $description) {
    id
    title
    description
  }
}
`;

const config = {
  options: {
    update: (proxy, { data: { createTask } }) => {
      const data = proxy.readQuery({ query: QUERY_ALL_TASKS });
      data.allTasks.unshift(createTask);
      proxy.writeQuery({ query: QUERY_ALL_TASKS, data });
    },
  },
};

export default graphql(CREATE_TASK, config)(NewTodoForm);
