import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  apiURL: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor( private http: HttpClient ) { }

  getBooks(q: string) : Observable<any[]> {
    let httpParams = new HttpParams(); 
    httpParams = httpParams.append("q", q);
    httpParams = httpParams.append("inauthor", q);

    httpParams = httpParams.append("key", 'AIzaSyBTsssTHXPmj-scE7IDAvSRjCoZj_FkTZU');
    httpParams = httpParams.append("maxResults", '20');

    const url = this.apiURL + "?" + httpParams;
    return this.http
      .get<{ items: any[] }>(url)
      .pipe(map(books => books.items || []))
      

  }
}
