import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserItemComponent } from './user.item';

@Component({
  selector: 'fc-user-list',
  directives: [UserItemComponent],
  styleUrls: ['./users.component.scss'],
  template: `

        <fc-user-list-item [User]=""></fc-user-list-item>
  `
})
export class UsersComponent {

    private userId: string;
    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        console.log('Init User list');

    }

    ngOnDestroy() {
        this.sub.unsubscribe();

        console.log('User Profile destroyed');
    }

}
