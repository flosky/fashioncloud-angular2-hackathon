import { Component, Input } from '@angular/core';
import { UserPost } from '../post';

@Component({
  selector: 'user-posts',
  directives: [UserPost],
  template: `
    <h3>Posts</h3>
    <div *ngFor="let post of posts">
        <user-post [post]='post'></user-post>
    </div>
  `
})
export class UserPosts {

    @Input() posts: [any];
}
