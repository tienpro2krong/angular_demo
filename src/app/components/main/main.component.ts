import { Component, OnInit } from '@angular/core';
import { title } from 'process';

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
  nameTodo: string;

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
  todos: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[] = [
    {
      userId: 1,
      id: 1,
      title: 'oooooooooooooooo',
      completed: false,
    },
    {
      userId: 2,
      id: 2,
      title: 'aaaaaaaaaaaaaaaaa',
      completed: false,
    },
    {
      userId: 3,
      id: 3,
      title: 'zzzzzzzzzzzzzzzzzzzzz',
      completed: false,
    },
    {
      userId: 4,
      id: 4,
      title: 'qqqqqqqqqqqqqqqqqqqqq',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

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
    this.todos.push({
      userId: 1,
      id: 1,
      title: this.nameTodo,
      completed: true,
    });
    // this.name = '';
  }
  deletedTodo(index) {
    this.todos.splice(index, 1);
  }
  toogleTodo(index) {
    this.todos[index].completed = !this.todos[index].completed;
    console.log(this.todos[index].completed);
  }
}
