import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.model';
import { randomBytes } from 'crypto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  insertTodo(title: string, content: string, complete: boolean) {
    const todoId = randomBytes(8).toString('hex');
    const newTodo = new Todo(todoId, title, content, complete);
    this.todos.push(newTodo);
    return newTodo;
  }

  getTodos() {
    return [...this.todos];
  }

  deleteTodo(todoId: string) {
    const index = this.findTodo(todoId)[1];
    this.todos.splice(index, 1);
  }

  private findTodo(id: string): [Todo, number] {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    const todo = this.todos[todoIndex];
    if (!todo) {
      throw new NotFoundException('Could not find product.');
    }
    return [todo, todoIndex];
  }
}
