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

  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo> {
    await this.todoRepository.update(id, { ...todo }); // обновляем поля из объекта todo
    return await this.todoRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}