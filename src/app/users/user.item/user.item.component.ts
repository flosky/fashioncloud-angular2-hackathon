import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'fc-user-list-item',
  styleUrls: ['./user.item.component.scss'],
  directives: [ROUTER_DIRECTIVES],
  template: `

        <div class="media col-sm-5 col-md-6">
            <a class="pull-left" [routerLink]="['user', User.id]">
              <img [src]="User.image.thumbnailUrl" class="media-object img-thumbnail" style="width: 80px; height: 80px;">
            </a>
            <div class="media-body text-left">
              <h3 class="media-heading"><strong><a [routerLink]="['user', User.id]">{{User.name}}</a></strong></h3>
              <p class="small"><span class="glyphicon glyphicon-phone"></span> {{User.phone}}</p>
              <p class="small"><span class="glyphicon glyphicon-envelope"></span> {{User.email}}</p>
            </div>
        </div>
  `
})
export class UserItemComponent {

    @Input() User = {};

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnChanges(changes) {
    console.log(changes);
  }

}
