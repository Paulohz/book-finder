import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Book } from './content/Book'

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  apiURL: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor( private http: HttpClient ) { }

  getBooks(q: string) : Observable<Book[]> {
    let httpParams = new HttpParams(); 
    httpParams = httpParams.append("q", q);

    httpParams = httpParams.append("key", 'AIzaSyBTsssTHXPmj-scE7IDAvSRjCoZj_FkTZU');

    const url = this.apiURL + "?" + httpParams;
    return this.http.get<any>(url);
  }
}
