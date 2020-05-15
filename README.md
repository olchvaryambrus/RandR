# R&R

## Országok nyilvntartása

- Az alkalmazás egy ingyenes országokat és azok adatait tároló REST API-tól szerzi az adatokat, melyeknek egy részét megjelenítjük. Lehet az országok között szűrni/keresni régió és országkód szerint.

### keretrendszer:
- Angular
 
 ### programnyelvek:
 - Typescript
 - HTML
 - egy kevéske CSS
 
 ### library-k:
 - Angular CLI
 - bootstrap
 - minimális JQuery
 
 - - Öszintén szólva azért választottam ezeket a technológiákat, mert az utóbbi hónapoban ezekkel dolgoztam leginkább és talán ezek is állnak hozzám a legközelebb jelenleg
 
 ### üzembe helyezés:
 A projectet .zip-ben le lehet tölteni, de akár clone-ozni is lehet a projectet, ezt követően megnyitjuk egy fejlesztőkörnyezetben (én VS code -ot használtam), majd az npm -install parancs kiadásával letöltjük a node_modues mappát, végül a formázás érdekében a bootstrap és a JQuery -t is letöltjük a projectbe, ha mindezzel kész vagyunk az ng serve parancs kiadásával tudjuk futtatni az alkalmazást, amely a localhost:4200 -as url-en lesz elérhető.
 
 ### adatforrásnaknak a következő url -en levő API -t használtam:
 - https://restcountries.eu/#api-endpoints-all
 - - Azért esett emellett a döntésem, mert mindenképp olyat szerettem volna választani, amely a zászlókat is tárolja kép formában és ez ráadásul vektorgrafikus kiterjesztésben tárolja, ezenfelül nagyon könnyen megérthető és egyszerű a használata és még sok adatot is tárol az egyes országokról
 
