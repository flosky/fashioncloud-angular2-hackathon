import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../shared';
import { UserDetail } from './userDetail';
import { UserAlbums } from './userAlbums';

@Component({
  selector: 'user-profile',
  providers: [UserApiService],
  directives: [UserDetail, UserAlbums],
  styleUrls: ['./user.component.scss'],
  template: `
    <h3>{{user.name}}</h3>
    <div><user-detail key="Email" value={{user.email}}></user-detail></div>
    <div><user-detail key="Phone" value={{user.phone}}></user-detail></div>
    <div><user-detail key="Website" value={{user.website}}></user-detail></div>
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
