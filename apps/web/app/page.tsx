import { CreateTodoDto, Todo } from '@websockets/api-interface';
import { revalidatePath } from 'next/cache';
import TodoList from './components/TodoList';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const data = await fetch('http://localhost:3000/api/todos').then((res) =>
    res.json()
  );

  async function handleSubmit(formData: FormData) {
    'use server';
    const name = formData.get('name')?.toString();

    const body: CreateTodoDto = { name: name ?? 'not', createdAt: new Date() };
    console.log(body);
    try {
      await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },

        body: JSON.stringify(body),
      });
      revalidatePath('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-24 flex justify-center ">
      <div className="w-1/2">
        <h1>Todo List </h1>
        <TodoList data={data as Todo[]} />
        <form action={handleSubmit} method="POST">
          <input
            type="text"
            name="name"
            className="h-8 border-2 border-sky-300 w-full p-4"
            placeholder="type in new todo"
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
}
