import { Injectable } from '@nestjs/common';
import { CreateTodoDto, Todo } from '@websockets/api-interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { name: 'Todo 1', createdAt: new Date() },
    { name: 'Todo 2', createdAt: new Date() },
    { name: 'Todo 3', createdAt: new Date() },
  ];

  create(createTodoDto: CreateTodoDto) {
    console.log(createTodoDto);
    return this.todos.push(createTodoDto);
  }

  findAll() {
    return this.todos;
  }

  remove(name: string) {
    return this.todos.filter((todo) => todo.name !== name);
  }
}
