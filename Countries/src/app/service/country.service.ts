import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable} from 'rxjs';

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
}
