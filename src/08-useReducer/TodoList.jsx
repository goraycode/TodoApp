import { TodoItem } from "./index";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((v) => (
        <TodoItem
          key={v.id}
          v={v}
          {...v}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
