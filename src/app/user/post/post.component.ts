import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'user-post',
  directives: [...ROUTER_DIRECTIVES],
  template: `
    <div>
        <b><a [routerLink]="['/post', {id: post.id}]">{{post.title}}</a></b><br />
        {{post.body}}
    </div>
  `
})
export class UserPost {

    @Input() post: any;
}
