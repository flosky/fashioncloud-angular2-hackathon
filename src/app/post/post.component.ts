import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostApiService } from '../shared' ;

@Component({
  selector: 'my-post',
  providers: [PostApiService],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    // variable to use for getting the id
    private postId: string;
    private sub: any;
    private post: any = {};

  constructor(
      private route: ActivatedRoute,
      private api: PostApiService ) {}

  ngOnInit() {
      this.sub = this.route.params.subscribe( params => {
         let id = params['id'];
         this.postId = id;
         this.getPost(this.postId);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPost(postId) {
      this.api.getPostDataObservable(postId)
          .subscribe((post) => {
              console.log('Success Observable:', post);
              this.post = post;
          }, (error) => {
              console.log('Error Observable:', error);
          })
  }

  // getPostDataPromise(postId) {
  //     return this.api.getPostDataPromise(postId);
  // }

}
