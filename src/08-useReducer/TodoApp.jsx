import { useTodos } from "../hooks/index";
import { TodoAdd, TodoList } from "./index";

const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl text-center font-bold">Todo APP</h1>
      <p className="text-center text-gray-500">Todos {todosCount()}</p>
      <p className="text-center text-gray-500">
        Pendientes {pendingTodosCount()}
      </p>
      <TodoAdd onNewTodo={handleNewTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
};

export default TodoApp;
