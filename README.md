# Unconf Server
An [unconference](https://en.wikipedia.org/wiki/Unconference) organizer.  Allows attendees to view and create sessions at your unconference.

### Configuring Your Conference
Before starting the application, configure your conference by editing `./src/constants/conf-cfg.js`.  This file contains information about the unconference itself, such as the owner/operator, room list, and start/end time.

### Running the application
1. `npm i`
2. `npm start`
3. Run the [client](https://github.com/Harlantr/unconf)

### Event Data Location
Event data is stored in `./data/events.db`.  This file isn't tied to the application, so you can move/replace it on will.
