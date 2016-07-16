import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fc-user-list-item',
  styleUrls: ['./user.item.component.scss'],
  template: `

        <div class="media col-sm-5 col-md-6">
            <a href="#" class="pull-left">
              <img alt="64x64" data-src="holder.js/64x64" class="media-object img-thumbnail" style="width: 64px; height: 64px;" src="http://placehold.it/64x64">
            </a>
            <div class="media-body text-left">
              <h3 class="media-heading"><strong><a href="#">Raoul Boulard</a></strong></h3>
              <p class="small">Dernière visite <span class="glyphicon glyphicon-time timestamp" data-toggle="tooltip"></span> il y a 12 jours</p>
            </div>
        </div>
  `
})
export class UserItemComponent {

    @Input() User;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

}
