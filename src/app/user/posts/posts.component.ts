import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'user-posts',
  directives: [...ROUTER_DIRECTIVES],
  template: `
    <h3>Posts</h3>
    <div *ngFor="let post of posts">
        <b><a [routerLink]="['/post', {id: post.id}]">{{post.title}}</a></b><br />
        {{post.body}}
    </div>
  `
})
export class UserPosts {

    @Input() posts: [any];
}
