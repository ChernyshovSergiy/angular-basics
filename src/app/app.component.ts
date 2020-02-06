import { Component } from '@angular/core';

export interface Post {
    title: string
    text: string
    id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts: Post[] = [
        {title: 'My First Post', text: 'Мне нужно быстро выучить Angular & Node', id: 1},
        {title: 'My Second Post', text: 'Мне нужно устроиться на высокооплачиваемую работу', id: 2}
    ];
    updatePosts( post: Post) {
        this.posts.unshift(post);
        console.log('new Post: ', post)
    }
    removePost(id: number ) {
        console.log('ID to remove: ', id);
        this.posts = this.posts.filter(p => p.id !== id)
    }
}
