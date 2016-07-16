import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumApiService } from '../shared';
import { AlbumEditComponent } from './album-edit';


@Component({
  selector: 'fc-album',
  providers: [AlbumApiService],
  directives: [AlbumEditComponent],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  public albumId: number;
  public album: any;
  public editing: boolean;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private api: AlbumApiService) {
    this.album = {};
    this.editing = false;
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

  edit(albumId) {
    console.log(albumId);
    this.editing = true;
  }

  onSave(newName: string) {
    console.log('newName 2: ', newName);
    this.album.title = newName;
  }

  onCancel(clicked: boolean) {
    console.log('clicked second: ', clicked);
    this.editing = false;
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
