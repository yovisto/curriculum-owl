import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CurriculumItem } from '../models/curriculum-item';
import { MessageService } from './message.service';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class CurriculumItemService {

  private curriculumItemsUrl = 'api/curriculumItems';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: NotificationService) { }

  getCurriculumItems(): Observable<CurriculumItem[]> {
    return this.http.get<CurriculumItem[]>(this.curriculumItemsUrl)
      .pipe(
        tap(_ => this.log_info('fetched curriculum items')),
        catchError(this.handleError<CurriculumItem[]>('getCurriculumItems', []))
      );
  }

  getCurriculumItemsNo404<Data>(id: number): Observable<CurriculumItem> {
    const url = `${this.curriculumItemsUrl}/?id=${id}`;
    return this.http.get<CurriculumItem[]>(url)
      .pipe(
        map(curriculums => curriculums[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log_error(`${outcome} curriculum item with id=${id}`);
        }),
        catchError(this.handleError<CurriculumItem>(`getCurriculumItem id=${id}`))
      );
  }

  getCurriculumItem(id: string): Observable<CurriculumItem> {
    const url = `${this.curriculumItemsUrl}/${id}`;
    return this.http.get<CurriculumItem>(url).pipe(
      tap(_ => this.log_info(`fetched curriculum item with id=${id}`)),
      catchError(this.handleError<CurriculumItem>(`getCurriculumItem id=${id}`))
    );
  }

  searchCurriculumItems(term: string): Observable<CurriculumItem[]> {
    if (!term.trim()) {
      // if not search term, return empty curriculum array.
      return of([]);
    }
    return this.http.get<CurriculumItem[]>(`${this.curriculumItemsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log_info(`found curriculum items matching "${term}"`) :
         this.log_error(`no curriculum items matching "${term}"`)),
      catchError(this.handleError<CurriculumItem[]>('searchCurriculumItems', []))
    );
  }

  addCurriculumItem(curriculum: CurriculumItem): Observable<CurriculumItem> {
    return this.http.post<CurriculumItem>(this.curriculumItemsUrl, curriculum, this.httpOptions).pipe(
      tap((newCurriculumItem: CurriculumItem) => this.log_success(`Added curriculum item with id=${newCurriculumItem.id}`)),
      catchError(this.handleError<CurriculumItem>('addCurriculumItem'))
    );
  }
  
  deleteCurriculumItem(id: string): Observable<CurriculumItem> {
    const url = `${this.curriculumItemsUrl}/${id}`;

    return this.http.delete<CurriculumItem>(url, this.httpOptions).pipe(
      tap(_ => this.log_success(`Deleted curriculum item with id=${id}`)),
      catchError(this.handleError<CurriculumItem>('deleteCurriculumItem'))
    );
  }

  updateCurriculumItem(curriculum: CurriculumItem): Observable<any> {
    return this.http.put(this.curriculumItemsUrl, curriculum, this.httpOptions).pipe(
      tap(_ => this.log_success(`Updated curriculum item with id=${curriculum.id}`)),
      catchError(this.handleError<any>('updateCurriculumItem'))
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
    this.messageService.showSuccess(message, 'Curriculum Item')    
  }

  private log_error(message: string) {
    this.messageService.showError(message, 'Curriculum Item')    
  }

  private log_info(message: string) {
    console.log(message);
  }
}

