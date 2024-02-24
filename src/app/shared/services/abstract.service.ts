import { Injectable } from '@angular/core';
import {_Service} from "./_service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AbstractService<T> implements _Service<T>{

  constructor(private _http: HttpClient) { }

  // todo: fix this generic service

  create(item: T): Observable<T> {
  }

  delete(id: string): Observable<void> {
    return undefined;
  }

  getAll(): Observable<T[]> {
    return undefined;
  }

  getById(id: string): Observable<T> {
    return undefined;
  }

  update(id: string, item: T): Observable<T> {
    return undefined;
  }
}
