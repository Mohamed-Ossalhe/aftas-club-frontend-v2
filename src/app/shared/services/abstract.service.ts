import {inject, Injectable} from '@angular/core';
import {_Service} from "./_service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AbstractService<T> implements _Service<T>{
  private api_url = environment.API_URL;
  private _http: HttpClient = inject(HttpClient);

  create(resource: string, item: T): Observable<T> {
    return this._http.post<T>(`${this.api_url}/${resource}/create`, item);
  }

  delete(resource: string, id: string): Observable<void> {
    return this._http.delete<void>(`${this.api_url}/${resource}/${id}/delete`);
  }

  getAll(resource: string): Observable<T[]> {
    return this._http.get<T[]>(`${this.api_url}/${resource}`);
  }

  getAllPaged(resource: string, page: number, size: number): Observable<T[]> {
    return this._http.get<T[]>(`${this.api_url}/${resource}?page=${page}&size=${size}`);
  }

  getById(resource: string, id: string): Observable<T> {
    return this._http.get<T>(`${this.api_url}/${resource}/${id}`);
  }

  update(resource: string, id: string, item: T): Observable<T> {
    return this._http.patch<T>(`${this.api_url}/${resource}/${id}/update`, item);
  }
}
