import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostApiService } from '../shared';
import { UserPosts as Posts } from '../user/posts';
import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/components/pagination';
import { FORM_DIRECTIVES } from '@angular/forms';


@Component({
  selector: 'posts',
  providers: [PostApiService],
  directives: [Posts,PAGINATION_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['./post.component.scss'],
  template: `
    <div>
        <user-posts [posts]='displayedPosts'></user-posts>
        <div class="text-center">
            <pagination [totalItems]="totalItems" [itemsPerPage]="itemsPerPage" (ngModel)="currentPage" (pageChanged)="pageChanged($event)"></pagination>
         </div>
    </div>
  `
})
export class PostsComponent {

    private sub: any;
    private posts: any = [];
    private displayedPosts: any = [];
    public itemsPerPage:number = 10;
    public totalItems:number;
    public currentPage:number = 1;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: PostApiService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.subscribeToGetPosts();
        });
    }

    subscribeToGetPosts() {
        this.api.getPostDataObservable('')
            .subscribe((posts) => {
                this.posts = posts;
                this.totalItems = this.posts.length;
                this.pageChanged(null);
            }, (error) => {
                console.log('Error Observable:', error);
            });
    }


    pageChanged(event:any):void {
        if(event) {
            this.displayedPosts = this.posts.slice((event.page - 1) * this.itemsPerPage, event.page * this.itemsPerPage);
        } else {
            this.displayedPosts = this.posts.slice(0, this.itemsPerPage);
        }
        console.log(this.totalItems)
        console.log(this.posts);
        console.log(this.displayedPosts);
    }

}
