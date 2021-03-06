[![Build Status](https://travis-ci.org/steffen3112/penalty-catalog.svg?branch=development)](https://travis-ci.org/steffen3112/penalty-catalog)

# penalty-catalog <img src="https://user-images.githubusercontent.com/29003094/46313219-96904080-c5c7-11e8-9be2-c4bc30d1da7a.png" width="64" height="64" /> 
The source code for the penalty catalog application is managed in this repository.  This is a hybrid app based on the Ionic Framework.  The application is developed by BBB & SS.

- Links:
	- Production Enviroment: https://penalty-catalog.herokuapp.com/
	- Development Enviroment: https://penalty-catalog-dev.herokuapp.com/


## Quick Start for local dev
```bash
cd client/ 
npm install
#To load frontend code in watch-mode
npm run serve

cd server/ 
npm install

heroku local web
```
## Docker Quickstart
```bash
#RUN ionic frontend / build docker image (soon via docker-compose.yml)
cd client/
docker image build -t ["image-name"]
docker container run -p 8100:8100 --rm "image-name"
```
## Project Description
Es wird eine native App für iOS und Android benötigt, die den Bußgeldkatalog einer Sportmannschaft abbilden kann. Ein zuvor definierter Mannschaftsdministrator kann neue Bußgeldeinträge pflegen und Bußgelder an Mitglieder verteilen. Ein Mitglied (User) ist einer Mannschaft angehörig und kann in der App nachsehen, was für Schulden und Verstöße er noch zu begleichen hat.

## Technology Stack
- Front-End:
    - Ionic & Angular
  
- Back-End:
    - *Probably golang ;-)*


### Anforderung:
- Native / Hybride App für iOS & Android (Verfügbar in App-Stores)
- Login- & Registrierfunktion
- ...

#### Front-End:
- Navigationsfunktionen
	- Meine Vergehen
		- Hier kann der User sehen, welche Bußgelder er noch zahlen bzw. welche & wann sie ihm auferlegt wurden
	- Bußgeldkatalog
		- Hier hat der User eine Übersicht, für welche Vergehen es Bußgelder gibt
		- Der Mannschaftsadministrator kann den Bußgeldkatalog pflegen, also neue Vergehen hinzufügen, alte rauslöschen und Bußgelder an User verteilen
	- Meine Mannschaft/en
		- User sehen, in welchen Mannschaften sie sich befinden und wer diesen Mannschaften angehört
		- Der Mannschaftsadministrator kann User einer Mannschaft hinzufügen und wieder entfernen
	- Einstellungen
		- Mein Profil

#### Back-End:
- Userverwaltung
- Rechteverwaltung
- Datenbankverwaltung für Bußgeldeinträge

### Zeitplan:
- Oktober 2018 soll eine funktionierende Betaversion verfügbar sein

### Vorgehensmodell:
- Projektmanagement via Github Kanban-Board

### Arbeitsverteilung:
- MZ -> Vertrieb / Marketing
- SS & BBBB -> Entwicklung
