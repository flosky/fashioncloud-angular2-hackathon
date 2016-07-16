import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'user-post',
  directives: [...ROUTER_DIRECTIVES],
  template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <b><a [routerLink]="['/post', post.id]">{{post.title}}</a></b>
        </div>
        <div class="panel-body">
            <div>{{post.body}}</div>
        </div>
    </div>
  `
})
export class UserPost {

    @Input() post: any;
}
