import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../model/country';
import { CountryService } from '../service/country.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})

//------------------------------------------------------------------------------------------------------------------------------------//

// Ez a komponens felel kiválasztott ország adatainak részletesebb megjelenítéséért, ország kód alapján kérem le az
// adatokat egyszerű get kéréssel

//------------------------------------------------------------------------------------------------------------------------------------//


export class CountryDetailsComponent implements OnInit {

  @Input() country: Country;

  constructor(private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    let code = this.route.snapshot.paramMap.get('alpha3Code');
    this.countryService.searchCountryByAlpha3Code(code.toString())
      .subscribe(country => this.country = country);
  }
  
  goBack(): void {
    this.location.back();
  }

}
