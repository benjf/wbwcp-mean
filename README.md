wbwcp-mean
==========

Port of the Wild Bor World Cup pool to the MEAN stack


Requirements (not sure on the miminum requirements, this is what's on my machine):

* Ruby >= 2.0.0
* MongoDB >= 2.4.6
* Express >= 4.0.0
* Node.js >= 0.10.28
* Grunt JS - grunt-cli 0.1.13 (npm install grunt-cli)
* Bower >= 1.3.3 (npm install bower)
* Compass >= 0.12.6 (gem install compass)


Initial dev setup:
* clone this repo
* 'cd' into the new directory
* run 'bower install'
* run 'npm install'
* copy lib/config/env/test.js to lib/config/env/development.js and update the db name
* start the mongo process (I usually just leave this running in a terminal tab)
  * mongod
* import the teams (double check the DB name!)
  * mongoimport --db wbwcp-dev --collection teams --type json --file lib/config/seedteams.json --jsonArray
* start the app - during start-up, Users and Matches will be created if the mongo collections (tables) are empty.
  * grunt serve

What works:
* User signup (no welcome email yet)
* User login; update password, name and team name
* Select match "choices" for first-round games.
* View match "choices" for other users.
* View standings page of all users.
* Basic UI to add site news.
* 'edit Match' form
  * Calculate points/pick after Match update

To Do:
* Password reset (you currently need to know the old one, and be logged in, to create a new one)
* User signup captcha/token/something to prevent spam registrations. Even a hard-coded "invite/registration code"
* Knock-out round logic and UI
* Timezone toggle?
* Mad UI/UX love!
 
