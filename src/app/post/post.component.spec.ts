import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Post', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([PostComponent]);
  });

  it('should log ngOnInit', inject([PostComponent], (post) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Post Page');
  }));

});
