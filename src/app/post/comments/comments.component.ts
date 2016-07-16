import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostApiService } from '../../shared' ;

@Component({
  selector: 'my-post-comments',
  providers: [PostApiService],
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
    // variable to use for getting the id
    private postId: string;
    private sub: any;
    private comment: any;

  constructor(
      private route: ActivatedRoute,
      private api: PostApiService ) {}

  ngOnInit() {
      this.sub = this.route.params.subscribe( params => {
         let id = params['id'];
         this.postId = id;
         this.getCommentsPost(this.postId);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCommentsPost(postId) {
      this.api.getCommentsPostDataObservable(postId)
          .subscribe((comment) => {
              console.log('Success Observable comment:', comment);
              this.comment = comment;
          }, (error) => {
              console.log('Error Observable:', error);
          })
  }

  // getPostDataPromise(postId) {
  //     return this.api.getPostDataPromise(postId);
  // }

}
