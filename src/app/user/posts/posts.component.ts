import { Component, Input } from '@angular/core';
import { UserPost } from '../post';
import { TextInputComponent } from '../../shared/TextInputComponent';

@Component({
  selector: 'user-posts',
  directives: [UserPost, TextInputComponent],
  template: `
    <h3>Posts</h3>
    <div *ngFor="let post of posts">
        <user-post [post]='post'></user-post>
    </div>
    <div>
        <fc-text-input [onSubmit]='onSubmit' [notification]='notification'></fc-text-input>
    </div>
  `
})
export class UserPosts {

    @Input() posts: [any];
    @Input() onSubmit;
    @Input() notification;
}
