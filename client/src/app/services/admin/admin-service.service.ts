import { Injectable } from '@angular/core';
import { Todo } from '../../models/todos';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor() { }

  todos: Todo[] = [];

  getTodos(): Todo[] {
    
    this.todos.push({
      id: 1,
      userId: 2,
      title: "Some Todo",
      completed: false
    })

    return  this.todos;
  }

}
