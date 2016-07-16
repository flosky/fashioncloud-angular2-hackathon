import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserApiService {

    constructor(private http: Http) {

    }

    getUserDataPromise (userId) {
        const userUrl = `http://jsonplaceholder.typicode.com/users/${userId}`;

        return this.http.get(userUrl)
            .toPromise()
            .then(response => response.json())
            .then((userData) => {
                return userData;
            });
    }

    getUserDataObservable (userId): Observable<any> {
        const userUrl = `http://jsonplaceholder.typicode.com/users/${userId}`;

        return this.http.get(userUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let user = res.json();
        return user || {};
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
    }
}
