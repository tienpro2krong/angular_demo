import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseURL = 'https://jsonplaceholder.typicode.com';
  // todos: Todo[] = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: 'oooooooooooooooo',
  //     completed: false,
  //   },
  //   {
  //     userId: 2,
  //     id: 2,
  //     title: 'aaaaaaaaaaaaaaaaa',
  //     completed: false,
  //   },
  //   {
  //     userId: 3,
  //     id: 3,
  //     title: 'zzzzzzzzzzzzzzzzzzzzz',
  //     completed: false,
  //   },
  //   {
  //     userId: 4,
  //     id: 4,
  //     title: 'qqqqqqqqqqqqqqqqqqqqq',
  //     completed: false,
  //   },
  // ];

  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  getTodo(id) {
    return this.http.get(this.baseURL + '/todos/' + id);
  }
  deleteTodo(id) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  addCreateTodo(todo) {
    return this.http.post(this.baseURL + '/todos', todo);
  }
}
