# Weekendownik

Lekka aplikacja PWA po polsku, przygotowana z myślą o Androidzie.

## Co działa
- wybór lokalizacji: Siedlce, Ciechanów lub własna miejscowość
- prognoza soboty i niedzieli z Open-Meteo (wymaga internetu)
- skróty do wyszukiwania atrakcji na Mapach Google
- kontrola budżetu 150 zł dla dwóch osób
- lista zapisanych miejsc
- podstawowe działanie offline po pierwszym uruchomieniu

## Uruchomienie i instalacja na Androidzie
PWA musi być opublikowana pod adresem HTTPS (samo otwarcie pliku index.html nie wystarczy do instalacji).

1. Wgraj zawartość folderu na hosting statyczny obsługujący HTTPS, np. GitHub Pages, Netlify lub Cloudflare Pages.
2. Otwórz opublikowany adres w Chrome na Androidzie.
3. Wybierz menu ⋮, a następnie „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”.
4. Uruchom Weekendownik z nowej ikony.

## Publikacja przez GitHub Pages
1. Utwórz nowe publiczne repozytorium o nazwie `Weekendownik`.
2. Wgraj wszystkie pliki z tego folderu do katalogu głównego repozytorium.
3. Wejdź w Settings → Pages.
4. W sekcji Build and deployment wybierz Deploy from a branch, branch `main`, folder `/ (root)`, a następnie Save.
5. Po publikacji otwórz adres `https://TWOJ_LOGIN.github.io/Weekendownik/`.

## Uwaga
- Wyszukiwanie atrakcji prowadzi do Map Google; nie jest równoznaczne z potwierdzeniem godzin otwarcia, cen ani dostępności.
- Aplikacja nie rezerwuje biletów i nie weryfikuje dostępności atrakcji.
- Przed lotem dronem sprawdź aktualne strefy i wymagania na https://drony.gov.pl/.
- Dane budżetu i zapisane miejsca są przechowywane lokalnie w przeglądarce na danym urządzeniu.
