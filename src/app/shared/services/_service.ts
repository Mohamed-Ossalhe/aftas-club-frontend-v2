import { Observable } from 'rxjs';

export interface _Service<T> {
  getAll(resource: string): Observable<T[]>;
  getAllPaged(resource: string, page: number, size: number): Observable<T[]>;
  getById(resource: string, id: string): Observable<T>;
  create(resource: string, item: T): Observable<T>;
  update(resource: string, id: string, item: T): Observable<T>;
  delete(resource: string, id: string): Observable<void>;
}
