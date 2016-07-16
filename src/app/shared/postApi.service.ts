import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PostApiService {

    constructor(private http: Http) {

    }

    getPostDataPromise (postId) {
        const postUrl = `http://jsonplaceholder.typicode.com/posts/${postId}`;

        return this.http.get(postUrl)
            .toPromise()
            .then(response => response.json())
            .then((postData) => {
                return postData;
            });
    }

    getPostDataObservable (postId): Observable<any> {
        const postUrl = `http://jsonplaceholder.typicode.com/posts/${postId}`;

        return this.http.get(postUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let post = res.json();
        return post || {};
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
