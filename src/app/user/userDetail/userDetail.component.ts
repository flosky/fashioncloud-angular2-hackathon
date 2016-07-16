import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-detail',
  template: `
    <div><b>{{key}}:</b> {{value}}</div>
  `
})
export class UserDetail {

    @Input() key: string;
    @Input() value: string;
}
