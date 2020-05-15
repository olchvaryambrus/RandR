import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../model/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

//------------------------------------------------------------------------------------------------------------------------------------//

  // Ez a komponens felel az országok listázásáért és a keresésért, a keresés ország kód alapján történik de régiókra is lehet szűrni
  // és a kettőt akár kombinálva is.
  // (Remélem nem probléma, hogy kártyás listázással oldottam meg és nem sima listázással, nyilvánvalóan úgy is képes vagyok 
  // megcsinálni, csak én ezt a fajta nézetet jobban preferálom)

//------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------//

  // A keresés alapvetően úgy lett megvalósítva, a két fajta szűrés miatt, hogy két listát feltöltök kezdésnek az összes ország
  // objektummal, erre azért van szükség, mert mindig a selected lista tartalmát jelenítem meg és akkor üres oldallal indulna a
  // program. Ezek után a countries lista tartalmát nem módosítom, hanem az ő tartalmával hasonlítom össze vagy a begépelt
  // ország kódot vagy a kiválasztott régiót vagy pedig mindkettőt együtt és ha egyezés van, akkor bekerül a selected listába.
  // A selected lista tartalmát nyilvánvalóan folyamatosan kell törölni különben összeakadások lennének.
  // Ezenkívül backspace megnyomása esetén is meghívom a search() metódust, hogy ne csak gépeléskor változzon a megjelenített tartalom
  // hanem akkor is ha törlünk egy vagy akár több karaktert 

//------------------------------------------------------------------------------------------------------------------------------------//


export class CountryListComponent implements OnInit {

  countries: Country[];
  selectedCountries: Country[];
  searchTerms: string;
  regions: string[] = ["All", "Europe", "Asia", "Americas", "Polar", "Oceania", "Africa"];
  selectedRegion: string;


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

    if(this.selectedRegion === "All"){
      this.selectedCountries = this.countries;
      return;
    }

    if(this.searchTerms && this.selectedRegion) {
      this.selectedCountries = this.countries.filter(res => {
        return res.alpha3Code.toLocaleLowerCase().match(this.searchTerms.toLocaleLowerCase()) && res.region.toLocaleLowerCase().match(this.selectedRegion.toLocaleLowerCase());
      });
      return;
    }
    if(this.searchTerms){
      this.selectedCountries = this.countries.filter(res => {
        return res.alpha3Code.toLocaleLowerCase().match(this.searchTerms.toLocaleLowerCase());
      });
      return;
    }
    if(this.selectedRegion){
      this.selectedCountries = this.countries.filter(res => {
        return res.region.toLocaleLowerCase().match(this.selectedRegion.toLocaleLowerCase());
      });
    }

  }

}
