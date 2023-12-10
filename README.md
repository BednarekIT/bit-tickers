
## BitTickers - BednarekIT 2023-12

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

### Zadanie:

Na podstawie projektu na Figmie (https://www.figma.com/file/R2fwacI4kvNnIswZ8okhEd/market-cap?node-id=0%3A5&mode=dev) oraz dołączonego pliku `tickers.json` stwórz prostą aplikację do wyświetlania informacji o kryptowalutach.

#### Tabela powinna prezentować:
- Name - nazwa kryptowaluty (pole `name`)
- Price - bieżąca cena w USD (pole `quotes.USD.price`)
- 1h% - zmiana ceny przez ostatnią godzinę (pole `quotes.USD.percent_change_1h`)
- 24h% - zmiana ceny przez ostatnie 24h (pole `quotes.USD.percent_change_24h`)
- 7d% - zmiana ceny przez ostatnie 7 dni (pole `quotes.USD.percent_change_7d`)
- Market Cap - całkowita wartość rynku (pole `quotes.USD.market_cap`)
- Volume (24h) - ilość handlu kryptowalutą w ciągu ostatnich 24h (pole `quotes.USD.volume_24h`)
- Circulating Supply - ilość kryptowaluty na rynku oraz w posiadaniu (pole `circulating_supply`)

Przy nazwie kryptowaluty powinno znajdować się jej logo (pomocna do tego będzie biblioteka podana poniżej i pole `symbol`). Każdy z rekordów będzie można dodać do "ulubionych" poprzez kliknięcie przycisku (np. z gwiazdką) obok jej nazwy. Dodatkowo po kliknięciu w wybrany rekord użytkownik powinien zostać przeniesiony na oddzielną podstronę (użyj do tego parametru `id`), która wyświetli szczegóły danej kryptowaluty (pozostałe pola z JSONa). Dla tej podstrony należy wykonać prosty widok, ale wizualnie spójny ze stroną główną.

#### Wykonując zadanie wykorzystaj:
- Angular 17 (Angular CLI lub Nx)
- Do wyświetlania logo kryptowaluty pomocna będzie ta biblioteka: https://www.npmjs.com/package/cryptocurrency-icons
- W miarę możliwość wykorzystaj takie narzędzia jak RxJS, NgRX

Pozostałe potrzebne Ci narzędzia/biblioteki wykorzystaj dowolnie.

#### Na plus będzie jeżeli:
- Napiszesz testy jednostkowe (nie musi być pokryta testami cała aplikacja)
- Wykorzystasz nowe narzędzia zawarte w Angular 17, np. Angular Signals, Standalone Components, Conditional statements
- Zadbasz o RWD
