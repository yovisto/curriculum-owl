import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Curriculum } from '../models/curriculum';
import { NotificationService } from './notification.service';


@Injectable({ providedIn: 'root' })
export class CurriculumService {

  private curriculumsUrl = 'api/curriculums';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: NotificationService) { }

  /** GET curriculums from the server */
  getCurriculums(): Observable<Curriculum[]> {
    return this.http.get<Curriculum[]>(this.curriculumsUrl)
      .pipe(
        tap(_ => this.log_info('fetched curriculums')),
        catchError(this.handleError<Curriculum[]>('getCurriculums', []))
      );
  }

  /** GET curriculum by id. Return `undefined` when id not found */
  getCurriculumsNo404<Data>(id: number): Observable<Curriculum> {
    const url = `${this.curriculumsUrl}/?id=${id}`;
    return this.http.get<Curriculum[]>(url)
      .pipe(
        map(curriculums => curriculums[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log_error(`${outcome} curriculum id=${id}`);
        }),
        catchError(this.handleError<Curriculum>(`getCurriculum id=${id}`))
      );
  }

  /** GET curriculum by id. Will 404 if id not found */
  getCurriculum(id: string): Observable<Curriculum> {
    const url = `${this.curriculumsUrl}/${id}`;
    return this.http.get<Curriculum>(url).pipe(
      tap(_ => this.log_info(`fetched curriculum id=${id}`)),
      catchError(this.handleError<Curriculum>(`getCurriculum id=${id}`))
    );
  }

  /* GET curriculums whose name contains search term */
  searchCurriculums(term: string): Observable<Curriculum[]> {
    if (!term.trim()) {
      // if not search term, return empty curriculum array.
      return of([]);
    }
    return this.http.get<Curriculum[]>(`${this.curriculumsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log_info(`found curriculums matching "${term}"`) :
         this.log_error(`no curriculums matching "${term}"`)),
      catchError(this.handleError<Curriculum[]>('searchCurriculums', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new curriculum to the server */
  addCurriculum(curriculum: Curriculum): Observable<Curriculum> {
    return this.http.post<Curriculum>(this.curriculumsUrl, curriculum, this.httpOptions).pipe(
      tap((newCurriculum: Curriculum) => this.log_success(`added curriculum with id=${newCurriculum.id}`)),
      catchError(this.handleError<Curriculum>('addCurriculum'))
    );
  }

  /** DELETE: delete the curriculum from the server */
  deleteCurriculum(id: string): Observable<Curriculum> {
    const url = `${this.curriculumsUrl}/${id}`;

    return this.http.delete<Curriculum>(url, this.httpOptions).pipe(
      tap(_ => this.log_success(`deleted curriculum with id=${id}`)),
      catchError(this.handleError<Curriculum>('deleteCurriculum'))
    );
  }

  /** PUT: update the curriculum on the server */
  updateCurriculum(curriculum: Curriculum): Observable<any> {
    return this.http.put(this.curriculumsUrl, curriculum, this.httpOptions).pipe(
      tap(_ => this.log_success(`Updated curriculum with id=${curriculum.id}`)),
      catchError(this.handleError<any>('updateCurriculum'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log_error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log_success(message: string) {
    this.messageService.showSuccess(message, 'Curriculum')    
  }

  private log_error(message: string) {
    this.messageService.showError(message, 'Curriculum')    
  }

  private log_info(message: string) {
    console.log(message);
  }

}
