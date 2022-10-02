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
    <main className="container mx-auto mt-5 w-11/12">
      <h1 className="text-4xl text-center text-white font-bold">Todo APP</h1>
      <p className="text-center text-gray-300">Todos {todosCount()}</p>
      <p className="text-center text-gray-300">
        Pendientes {pendingTodosCount()}
      </p>
      <TodoAdd onNewTodo={handleNewTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </main>
  );
};

export default TodoApp;
