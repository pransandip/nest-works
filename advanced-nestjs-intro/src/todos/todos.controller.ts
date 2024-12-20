import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  addTodo(
    @Body('title') todoTitle: string,
    @Body('content') todoContent: string,
    @Body('complete') todoComplete: boolean,
  ): Todo {
    const generatedTodo = this.todosService.insertTodo(
      todoTitle,
      todoContent,
      todoComplete,
    );
    return generatedTodo;
  }

  @Get()
  getAllTodos() {
    return this.todosService.getTodos();
  }

  @Delete(':id')
  removeProduct(@Param('id') todoId: string) {
    this.todosService.deleteTodo(todoId);
    return null;
  }
}
