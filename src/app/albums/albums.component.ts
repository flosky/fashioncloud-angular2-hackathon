import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'user-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {

  private albumId: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    console.log('Hello Albums');

    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.albumId = id;
       console.log('Album:', id);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
