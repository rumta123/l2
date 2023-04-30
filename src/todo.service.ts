import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async createTodo(
    title: string,
    description: string,
    isDone: boolean,
  ): Promise<Todo> {
    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    todo.isDone = isDone;
  
    return await this.todoRepository.save(todo);
  }
}