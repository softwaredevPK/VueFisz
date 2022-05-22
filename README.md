# VueFisz

Aplikacja pozwala na naukę fiszek dodawanych przez użytkownika. Projekt w ramach przedmiotu Bogate aplikacje internetowe.

## Członkowie grupy
Numer grupy: 20
* Gryczan Radosław, nr albumu 224447, ZZISN2-1212
* Kotarba Piotr, nr albumu 210007, ZZISN2-1212

## Stack technologiczny
Backend: Python/Django
Front: Vue.js

## Założenia aplikacji

1. Autoryzacja(login / rejestracja)
2. Tworzenie Fiszek(zestawy do nauki)
3. Nauka za pomocą fiszek, ustawianie stanów itp.
4. Edycja fiszek
5. Podgląd fiszek

## Opisy szczegółowe

**Autoryzacja (login/rejestracja)**

Użytkownik może zarejestrować się w usłudze, dzięki czemu będzie posiadał unikalny zestaw fiszek. Przy uruchomieniu aplikacji w internecie dostęp do niej będzie możliwy poprzez zalogowanie się.


**Tworzenie fiszek**

Każdy użytkownik tworzy zestawy według uznania - wewnątrz nich może tworzyć nowe fiszki. Zestawy mogą służyć do podziału fiszek na tematyczne. Zestawy można modyfikować (dodawanie, usuwanie, edycja) na poziomie samego zestawu (a więc np.: zmiana tytułu).


**Nauka za pomocą fiszek**

Ekran ten po wybraniu zestawu pozwala na naukę fiszek. Użytkownik może decydować czy fiszka powinna być ponownie pokazywana - jeżeli słówko zostało zapamiętane, stan fiszki ulega zmianie i nie jest już pokazywana.


**Edycja fiszek** 

Każdą z fiszek można edytować lub usuwać. W ramach edycji można zmienić jej stan (nauczona/nie nauczona) lub zawartość.


**Pogląd fiszek**

Po wybraniu fiszki dany element można podejrzeć. Funkcja przydatna przy długich tekstach - użytkownik wówczas może podzielić fiszkę na krótszą.
