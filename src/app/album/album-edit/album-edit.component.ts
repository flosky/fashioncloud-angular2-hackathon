import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from '../../shared';

@Component({
  selector: 'fc-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss']
})

export class AlbumEditComponent {

    @Input() album: any; //use an Album class
    @Output() onSave = new EventEmitter<string>();
    @Output() onCancel = new EventEmitter<boolean>();

    submited = false;
    albumName = '';
    clicked = false;

    ngOnInit() {
      console.log(this.album);
      this.albumName = this.album.title;
    }

    save(newName: string, event: Event) {
      console.log('save the new name: ', newName);
      event.preventDefault();
      this.onSave.emit(newName);
    }

    close(clicked: boolean, event: Event) {
      console.log('clicked first: ',clicked);
      event.preventDefault();
      this.onCancel.emit(clicked);
      this.clicked = false;
    }
}
