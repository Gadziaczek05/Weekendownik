# Weekendownik AI

To jest wersja PWA z czatem AI. Frontend pozostaje aplikacją internetową, a klucz OpenAI jest przechowywany wyłącznie po stronie funkcji serwerowej.

## Co zawiera
* wybór miejscowości i prognozę Open-Meteo
* inspiracje i skróty do Map Google
* budżet 150 zł dla dwóch osób i listę wydatków
* zapisane miejsca
* czat AI z wyszukiwaniem internetowym przez Responses API

## Uruchomienie przez Vercel
1. Rozpakuj folder `Weekendownik`.
2. Wgraj jego zawartość do nowego repozytorium GitHub albo istniejącego repozytorium.
3. Zaloguj się na https://vercel.com/ i wybierz Add New → Project.
4. Zaimportuj repozytorium z Weekendownikiem. Nie zmieniaj ustawień Build Command ani Output Directory, jeśli Vercel wykryje projekt jako statyczny z funkcją `api`.
5. W ustawieniach projektu Vercel otwórz Settings → Environment Variables.
6. Dodaj zmienną:
   * Name: `OPENAI_API_KEY`
   * Value: wklej swój klucz API OpenAI
   Zaznacz Production, Preview i Development, jeśli chcesz używać we wszystkich środowiskach.
7. Zapisz zmienną i wykonaj Redeploy.
8. Otwórz adres `.vercel.app` na Androidzie w Chrome. Menu ⋮ → „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”.

## Ważne
* Nigdy nie wklejaj klucza API do `app.js`, `chat.js`, HTML, repozytorium GitHub ani do rozmowy z asystentem. Klucz wpisuje się tylko jako zmienną środowiskową w Vercel.
* API OpenAI jest rozliczane osobno od abonamentu ChatGPT. Koszt zależy od użycia modelu i wyszukiwania.
* Włącz limit wydatków lub alert budżetowy w panelu API OpenAI.
* Endpoint ma podstawową walidację, ale przed publicznym udostępnieniem większej liczbie osób warto dodać logowanie i trwałe limity zapytań.
* Wyszukiwanie internetowe pomaga znaleźć bieżące informacje, ale nie gwarantuje dostępności biletów ani rezerwacji. Zawsze sprawdź stronę organizatora.
* Aplikacja nie potwierdza legalności lotu dronem. Sprawdzaj strefy w https://drony.gov.pl/.

## Test lokalny
Wymagany jest Node.js. W terminalu w katalogu projektu:
```bash
npm install
npx vercel dev
```
Następnie dodaj `OPENAI_API_KEY` do lokalnego pliku `.env.local` (nie wysyłaj go do GitHub):
```env
OPENAI_API_KEY=tu_wklej_swoj_klucz
```
