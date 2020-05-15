import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private basicUrl: string;

  constructor(private http: HttpClient) {
    this.basicUrl = 'https://restcountries.eu/rest/v2';
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getAll(): Observable<Country[]> {    
    const url = `${this.basicUrl}/all`;
    return this.http.get<Country[]>(url);
  }

  public searchCountryByAlpha3Code(term: string): Observable<Country> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Country>(`${this.basicUrl}/alpha/${term}`).pipe(
      catchError(this.handleError<Country>('searchCountries', ))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
