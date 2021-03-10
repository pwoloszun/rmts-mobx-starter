import React from 'react';

import TodoListView from './components/TodoListView';
import todoStore from './store/todos.store';

export default function DashboardPage(): React.ReactElement {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>Hello user</p>
      <TodoListView todoList={todoStore} />
    </div>
  );
}
