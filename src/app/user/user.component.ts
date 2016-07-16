import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../shared';

@Component({
  selector: 'user-profile',
  providers: [UserApiService],
  styleUrls: ['./user.component.scss'],
  template: `
    <h3>{{user.name}}</h3>
    <div><b>Email:</b> {{user.email}}</div>
    <div><b>Phone:</b> {{user.phone}}</div>
    <div><b>Website:</b> {{user.website}}</div>
  `
})
export class UserComponent {

    private userId: number;
    private sub: any;
    private user: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: UserApiService) {}

    ngOnInit() {
        console.log('Init User Profile');

        this.sub = this.route.params.subscribe(params => {
            this.userId = params['id'];

            this.subscribeToGetUser(this.userId);

            // this.getUserDataPromise(this.userId)
            //     .then((userData) => {
            //         if (userData) {
            //             this.user = userData;
            //         }
            //     })
            //     .catch((error) => {
            //         console.log('Error:', error);
            //     });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();

        console.log('User Profile destroyed');
    }

    getUserDataPromise(userId) {
        return this.api.getUserDataPromise(userId);
    }

    subscribeToGetUser(userId) {
        this.api.getUserDataObservable(userId)
            .subscribe((user) => {
                console.log('Success Observable:', user);
                this.user = user;
            }, (error) => {
                console.log('Error Observable:', error);
            })
    }

}
