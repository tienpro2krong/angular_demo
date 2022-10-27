import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';
import { title } from 'process';
import { PostService, Post } from 'src/app/services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'Tien';
  googleURL: string = 'https://www.google.com/';
  colSpan = 4;
  count: number = 0;
  selectedNavTab = 'Tab1';
  nameTodo: string = '';
  todos: Todo[] = [];
  post: Post[] = [];

  listTodo: {
    userId: number;
    id: number;
    name: string;
    completed: boolean;
  }[] = [
    {
      userId: 1,
      id: 1,
      name: 'string',
      completed: false,
    },
  ];

  constructor(private todoService: TodoService) {
    // postService.getAllPost().subscribe((res: Post[]) => {
    //   this.post = res;
    // });
  }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }

  onBtnClick() {
    console.log('Clicked');
  }
  increase(event) {
    console.log(event);
    if (this.count <= 9) {
      this.count += 1;
    }
  }
  reduce() {
    this.count -= 1;

    if (this.count < 0) {
      this.count = 0;
    }
  }
  id: number = 1;
  Addtwoway() {
    this.listTodo.push({
      userId: 1,
      id: this.id,
      name: this.name,
      completed: false,
    });
    this.name = '';
    console.log(this.listTodo);
  }
  deletedTung(index) {
    this.listTodo.splice(index, 1);
  }
  toogleTodoTung(index) {
    this.listTodo[index].completed = !this.listTodo[index].completed;
  }

  twowayAdd() {
    var createTodo = {
      userId: 1,
      id: 1,
      title: this.nameTodo,
      completed: false,
    };
    this.nameTodo = '';
    this.todoService.addCreateTodo(createTodo).subscribe(
      (res: Todo) => {
        this.todos.unshift(res);
      },
      (err) => {}
    );
  }
  deletedTodo(index) {
    this.todoService
      .deleteTodo(this.todos[index].id as Number)
      .subscribe((res) => {});
    this.todos.splice(index, 1);
  }
  toogleTodo(index) {
    this.todos[index].completed = !this.todos[index].completed;
    console.log(this.todos[index].completed);
  }

  postAdd() {
    this.post.push({
      userId: 1,
      id: 1,
      title: this.nameTodo,
      body: '',
    });
    this.name = '';
  }
}
