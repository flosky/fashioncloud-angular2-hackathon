import {
  async,
  inject,
  addProviders
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { UserPosts } from './posts.component';
import { UserPost } from '../post';
import { TextInputComponent } from '../../shared/TextInputComponent';
import { Component } from '@angular/core';

@Component({ template: '' })
class MockDirective{}

describe('UserPosts Component', () => {
    let element;
    let component;
    let fixture;

    beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb
        .overrideDirective(UserPosts, UserPost, MockDirective)
        .overrideDirective(UserPosts, TextInputComponent, MockDirective)
        .createAsync(UserPosts).then((f) => {
            fixture = f;
            element = fixture.nativeElement;
            component = fixture.componentInstance;
        });
    })));

    it('should ...', () => {

        component.posts = ['post1', 'post2'];
        component.onSubmit = 'onSubmit';
        component.notification = 'notification';

        fixture.detectChanges();

        expect(element.innerHTML).toContain('<fc-text-input ng-reflect-on-submit="onSubmit" ng-reflect-notification="notification"></fc-text-input>');
        expect(element.innerHTML).toContain('<user-post ng-reflect-post="post1"></user-post>');
        expect(element.innerHTML).toContain('<user-post ng-reflect-post="post2"></user-post>');
    });

});
