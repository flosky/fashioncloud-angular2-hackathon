import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostApiService } from '../shared' ;
import { CommentInputText } from '../shared/CommentInputText';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'my-post',
  providers: [PostApiService],
  templateUrl: './post.component.html',
  directives: [CommentsComponent, CommentInputText],
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    // variable to use for getting the id
    private postId: string;
    private sub: any;
    private post: any = {};
    private comment: any;
    public onSubmit;
    @Input() notification;

  constructor(
      private route: ActivatedRoute,
      private api: PostApiService ) {}

  ngOnInit() {
      this.sub = this.route.params.subscribe( params => {
         let id = params['id'];
         this.postId = id;
         this.getPost(this.postId);
         this.onSubmit = this.addPost.bind(this);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addPost(post) {
      this.comment = [...this.comment, post];
      this.notification = {
          status: 'success'
      }
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
