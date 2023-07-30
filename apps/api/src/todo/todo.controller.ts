import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from '@websockets/api-interface';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    console.log(createTodoDto);
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Delete()
  remove(@Body() name: string) {
    console.log(name);
    return this.todoService.remove(name);
  }
}
