import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { PostComponent } from './post.component';

describe('Post', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([PostComponent]);
  });

  it('should log ngOnInit', inject([PostComponent], (post) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    post.ngOnInit();
    expect(getPost).toHaveBeenCalled;
  }));

});
