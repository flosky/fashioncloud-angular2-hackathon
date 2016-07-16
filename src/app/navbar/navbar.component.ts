import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'fc-navbar',
  directives: [...ROUTER_DIRECTIVES],
  styleUrls: ['./navbar.component.scss'],
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
          <div class="navbar-header">
              <a class="navbar-brand" [routerLink]="['']">
                  <img alt="Brand" src="/img/fashioncloud_logo_small.png">
              </a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                  <li *ngFor="let link of links" ><a [routerLink]="[link.link]">{{ link.name }}</a></li>
              </ul>
          </div><!--/.nav-collapse -->
      </div>
  </nav>
  `
})
export class navbarComponent {

    private userName: string;
    private sub: any;
    links: any;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.links = [
            {
                name: 'Users',
                link: ''
            },
            {
                name: 'Posts',
                link: 'post'
            },
            {
                name: 'Albums',
                link: 'albums'
            }
        ];
    }
}
