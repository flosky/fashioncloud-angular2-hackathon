import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../shared';
import { ImageApiService } from '../shared';
import { UserItemComponent } from './user.item';

@Component({
  selector: 'fc-user-list',
  providers: [UserApiService, ImageApiService],
  directives: [UserItemComponent],
  styleUrls: ['./users.component.scss'],
  template: `
        <fc-user-list-item *ngFor="let User of Users" [User]="User"></fc-user-list-item>
  `
})
export class UsersComponent {

    private RawUsers: any = [];
    private Users: any = [];
    private RawImages: any = [];
    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private UserApi: UserApiService, private ImageApi: ImageApiService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.subscribeToGetUsers();
        });

    }

    subscribeToGetUsers() {
        this.UserApi.getUserDataObservable('')
            .subscribe((usersData) => {

                usersData.forEach( (user) => {

                    this.ImageApi.getImageDataObservable(user.id)
                        .subscribe((image) => {
                            let newUser = user;
                            newUser.image = image;
                            this.Users.push(newUser);
                        }, (error) => {
                            console.log('error', error);
                        })
                });
            }, (error) => {
                console.log('error', error);
            })
    }

    subscribeToGetImage(id) {
        return this.ImageApi.getImageDataObservable(id)
            .subscribe((Image) => {
                this.RawImages.push(Image);
            }, (error) => {
                console.log('error', error);
            })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();

    }

}
