import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '../../shared';


@Component({
  selector: 'user-albums',
  providers: [UserApiService],
  templateUrl: './userAlbums.component.html',
  styleUrls: ['./userAlbums.component.scss']
})
export class UserAlbums {

  @Input() userId: number;
  private sub: any;
  public albums: any;

  constructor(
    private route: ActivatedRoute,
    private api: UserApiService) {
    this.albums = [];
    this.userId = 2;
    console.log(this.userId);
  }

  ngOnInit() {
    console.log('Hello Albums');

    this.sub = this.route.params.subscribe(params => {
       this.subscribeToGetAlbums(this.userId);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  subscribeToGetAlbums(userId) {
      this.api.getUserAlbumsObservable(userId)
          .subscribe((albums) => {
              console.log('Success Observable:', albums);
              this.albums = albums;
          }, (error) => {
              console.log('Error Observable:', error);
          })
  }

}
