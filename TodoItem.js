import React from 'react';

const TodoItem = ({ item }) => (
  <div>
    {item.title} - {item.description}
  </div>
);

export default TodoItem;
