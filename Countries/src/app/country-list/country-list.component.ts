import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../model/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  searchTerms: string;
  selectedCountries: Country[];


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAll().subscribe(data => {
      this.countries = data;
    });
    this.countryService.getAll().subscribe(data => {
      this.selectedCountries = data;
    });
  }

  search(): void {
    this.selectedCountries = undefined;
    this.selectedCountries = this.countries.filter(res => {
      return res.alpha3Code.toLocaleLowerCase().match(this.searchTerms.toLocaleLowerCase());
    });
  }

}
