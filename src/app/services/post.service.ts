import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  constructor(private http: HttpClient) {}
  getAllPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
