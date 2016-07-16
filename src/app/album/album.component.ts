import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumApiService } from '../shared';


@Component({
  selector: 'album',
  providers: [AlbumApiService],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  public albumId: number;
  public album: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private api: AlbumApiService) {
    this.album = {};
  }

  ngOnInit() {
    console.log('Welcome to the Album amazing page');

    this.sub = this.route.params.subscribe(params => {
       let id = +params['id'];
       this.albumId = id;
       this.subscribeToGetAlbum(this.albumId);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  subscribeToGetAlbum(albumId) {
      this.api.getAlbumObservable(albumId)
          .subscribe((album) => {
              console.log('Success Observable:', album);
              this.album = album;
          }, (error) => {
              console.log('Error Observable:', error);
          })
  }

}
