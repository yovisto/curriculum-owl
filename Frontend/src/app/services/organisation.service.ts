import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Organisation } from '../models/organisation';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {  

  private organisationsUrl = 'api/organisations';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: NotificationService) { }

  
  getOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.organisationsUrl)
      .pipe(
        tap(_ => this.log_info('fetched organisations')),
        catchError(this.handleError<Organisation[]>('getOrganisations', []))
      );
  }

  /** GET organisation by id. Return `undefined` when id not found */
  getOrganisationsNo404<Data>(id: number): Observable<Organisation> {
    const url = `${this.organisationsUrl}/?id=${id}`;
    return this.http.get<Organisation[]>(url)
      .pipe(
        map(organisations => organisations[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log_error(`${outcome} organisation with id=${id}`);
        }),
        catchError(this.handleError<Organisation>(`getOrganisation id=${id}`))
      );
  }

  /** GET organisation by id. Will 404 if id not found */
  getOrganisation(id: string): Observable<Organisation> {
    const url = `${this.organisationsUrl}/${id}`;
    return this.http.get<Organisation>(url).pipe(
      tap(_ => this.log_info(`fetched organisation with id=${id}`)),
      catchError(this.handleError<Organisation>(`getOrganisation id=${id}`))
    );
  }

  /* GET organisations whose name contains search term */
  searchOrganisations(term: string): Observable<Organisation[]> {
    if (!term.trim()) {
      // if not search term, return empty organisation array.
      return of([]);
    }
    return this.http.get<Organisation[]>(`${this.organisationsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log_info(`Found organisations matching "${term}"`) :
         this.log_error(`No organisations matching "${term}"`)),
      catchError(this.handleError<Organisation[]>('searchOrganisations', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new organisation to the server */
  addOrganisation(organisation: Organisation): Observable<Organisation> {
    return this.http.post<Organisation>(this.organisationsUrl, organisation, this.httpOptions).pipe(
      tap((newOrganisation: Organisation) => this.log_success(`Added organisation with id=${newOrganisation.id}`)),
      catchError(this.handleError<Organisation>('addOrganisation'))
    );
  }

  /** DELETE: delete the organisation from the server */
  deleteOrganisation(id: string): Observable<Organisation> {
    const url = `${this.organisationsUrl}/${id}`;

    return this.http.delete<Organisation>(url, this.httpOptions).pipe(
      tap(_ => this.log_error(`Deleted organisation with id=${id}`)),
      catchError(this.handleError<Organisation>('deleteOrganisation'))
    );
  }

  /** PUT: update the organisation on the server */
  updateOrganisation(organisation: Organisation): Observable<any> {
    return this.http.put(this.organisationsUrl, organisation, this.httpOptions).pipe(
      tap(_ => this.log_success(`Updated organisation with id=${organisation.id}`)),
      catchError(this.handleError<any>('updateOrganisation'))
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
