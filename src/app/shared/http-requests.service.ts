import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class HttpRequestsService<T> {

    constructor(protected http: HttpClient, private apiUrl: string) { }

    public get(): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl).pipe(take(1));
    }

    public getById(id: number): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${id}`).pipe(take(1));
    }

    public save(data: T): Observable<Object> {
        if (data['id']) {
            return this.update(data);
        } else {
            return this.create(data);
        }
    }

    public delete(id: number): Observable<Object> {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(take(1));
    }

    private create(data: T): Observable<Object> {
        return this.http.post(this.apiUrl, data).pipe(take(1));
    }

    private update(data: T): Observable<Object> {
        return this.http.put(`${this.apiUrl}/${data['id']}`, data).pipe(take(1));
    }
}