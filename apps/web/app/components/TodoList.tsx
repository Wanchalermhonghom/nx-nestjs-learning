'use client';

import { Todo } from '@websockets/api-interface';
import { revalidateTag } from 'next/cache';

const TodoList = ({ data }: { data: Todo[] }) => {
  async function deleteItem(name: string) {
    await fetch('http://localhost:3000/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
  }
  return (
    <ul className="my-4">
      {data.map((todo: Todo) => (
        <li
          className=" flex justify-between p-4 border border-slate-100 bg-white"
          key={todo.name}
        >
          {todo.name}
          <button
            className="rounded-lg border border-slate-200 p-2"
            onClick={async () => await deleteItem(todo.name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
