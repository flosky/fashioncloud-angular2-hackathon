import {
  async,
  inject,
  addProviders
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

// Load the implementations that should be tested
import { UserPost } from './post.component';

xdescribe('UserPost', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([]);
  });

  it('should render correct data', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.createAsync(UserPost).then((fixture) => {
        // fixture.componentInstance.post = {
        //     id: 42,
        //     title: 'Test Post',
        //     body: 'Test Body'
        // };
        //
        // fixture.detectChanges();
        //
        // let compiled = fixture.elementRef.nativeElement;

        // expect(compiled.querySelector('a')).toHaveText('Test Post');
    });

  })));

});
