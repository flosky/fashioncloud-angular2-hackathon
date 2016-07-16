import { Component, Input } from '@angular/core';

@Component({
  selector: 'fc-comment-input',
  template: `
    <div class="panel panel-default">
        <div class="panel-body">

        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input [(ngModel)]='email' type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                <label for="title">Title</label>
                <input [(ngModel)]='title' type="text" class="form-control" id="title" placeholder="title">
                <label for="comment">comment</label>
                <input [(ngModel)]='comment' type="text" class="form-control" id="comment" placeholder="comment">
            </div>
            <button class="btn btn-success" (click)='submitData()'>Add</button>
        </form>
        </div>
        </div>
  `
})

export class CommentInputText {

    email: string = '';
    title: string = '';
    comment: string = '';

    @Input() onSubmit;
    @Input()
    set notification(notification: any) {

        if (notification && notification.status === 'success') {
            console.log('Acion completed successfully');
            this.email = '';
            this.title = '';
            this.comment = '';
        }
    }

    submitData() {
        const post = {
            id: 99,
            email: this.email,
            title: this.title,
            comment: this.comment
        };
        this.onSubmit(post);
    }
}
