import { Component, Input } from '@angular/core';

@Component({
  selector: 'fc-text-input',
  template: `
    <div class="panel panel-default">
        <div class="panel-body">

            <form>
                <div class="form-group">
                    <label>Add Post</label>
                    <textarea [(ngModel)]='text' class="form-control" rows="4"></textarea>
                </div>
                <button class="btn btn-default" (click)='submitData()'>Enter</button>
            </form>
        </div>
    </div>
  `
})
export class TextInputComponent {

    text: string = '';

    @Input() onSubmit;
    @Input()
    set notification(notification: any) {

        if (notification && notification.status === 'success') {
            console.log('Acion completed successfully');
            this.text = '';
        }
    }

    submitData() {
        const post = {
            id: 99,
            title: 'New post',
            body: this.text
        };
        this.onSubmit(post);
    }
}
