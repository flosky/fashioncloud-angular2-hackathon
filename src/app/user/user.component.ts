import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  styleUrls: ['./user.component.scss'],
  template: `
    <h3>User {{userId}}</h3>
  `
})
export class UserComponent {

    private userId: string;
    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        console.log('Init User Profile');

        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.userId = id;

            console.log('User Id:', id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();

        console.log('User Profile destroyed');
    }

}
