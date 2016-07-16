import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-post',
  template: `
    <div>
        <b><span style='cursor: pointer;' (click)='goToPost(post.id)'>{{post.title}}</span></b><br />
        <div>{{post.body}}</div>
    </div>
  `
})
export class UserPost {

    @Input() post: any;

    constructor(private router: Router) {}

    goToPost(postId) {
        this.router.navigate(['/post', postId]);
    }
}
