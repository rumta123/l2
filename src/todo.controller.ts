import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }

  @Post()
  async createTodo(@Body() todo: Todo): Promise<Todo> {
    return await this.todoService.create(todo);
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: number,
    @Body() todo: Todo,
  ): Promise<Todo> {
    return await this.todoService.update(id, todo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number): Promise<void> {
    return await this.todoService.delete(id);
  }
}