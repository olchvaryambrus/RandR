import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Country } from '../model/country';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  countries$: Country;
  searchTerms: string;

  constructor(private countryService: CountryService) { }

  search(): void {
    this.countryService.searchCountryByAlpha3Code(this.searchTerms).subscribe(
      data => { this.countries$ = data; 
      });
  }

  ngOnInit(): void {
  }

}
