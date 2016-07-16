import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    //variable to use for getting the id
    private postId : number;
    private sub: any;

  constructor(private route: ActivatedRoute) {
    // Do stuff

  }

  ngOnInit() {
      this.sub = this.route.params.subscribe( params => {
         let id = +params['id'];
         this.postId = id;
         console.log('album',id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
