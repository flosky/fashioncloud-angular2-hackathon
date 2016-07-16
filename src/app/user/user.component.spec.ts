import {
  inject,
  addProviders,
  beforeEachProviders
} from '@angular/core/testing';

// Load the implementations that should be tested
import { UserComponent } from './user.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserApiService } from '../shared';

class EmptyMock {}
class ApiMock {
    getUserDataObservable() {}
}

describe('UserComponent', () => {
    // provide our implementations or mocks to the dependency injector

    beforeEachProviders(() => [
        {provide: ActivatedRoute, useClass: EmptyMock},
        {provide: Router, useClass: EmptyMock},
        {provide: UserApiService, useClass: ApiMock}
    ]);

    beforeEach(() => {
        addProviders([UserComponent]);
    });

    it('should call api when loading data', inject([UserComponent, UserApiService], (user, api) => {

        const subscribeSpy = jasmine.createSpy('subscribe').and.callFake((cb) => {
            cb('user');
        });
        const getUserDataSpy = spyOn(api, 'getUserDataObservable').and.returnValue({
            subscribe: subscribeSpy
        });

        user.subscribeToGetUser();

        expect(getUserDataSpy).toHaveBeenCalled();
        expect(subscribeSpy).toHaveBeenCalled();
    }));

    it('should add a post', inject([UserComponent], (user) => {

        user.addPost('Test Post');

        expect(user.posts.length).toBe(1);
        expect(user.posts[0]).toEqual('Test Post');
        expect(user.notification).toEqual({ status: 'success' });
    }));

});
