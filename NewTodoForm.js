import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
mutation createTask($title: String!, $description: String){
  createTask(title: $title, description: $description) {
    id
    title
    description
  }
}
`;

export default graphql(CREATE_TASK)(NewTodoForm);
