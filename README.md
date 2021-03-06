# DrumKick

[LIVE SITE](https://drumkick.herokuapp.com)

![welcome page](https://raw.githubusercontent.com/tocarevmax/DrumKick/master/docs/screenshots/01_welcome.png)


DrumKick is a full-stack project purposed to redesign core functionalities of Songkick but as a React/Redux single-page application.
It uses Ruby on Rails on the backend to serve RESTful JSON API endpoints.


## Features


* Richly seeded database with nearly 1,000 most sought-after artists and accurate information on thousands of their upcoming concerts.

* Responsive cross-table search promptly re-rendering most accurate result on each key-stroke.

* User authentication and session management.

* Track artists and see their upcoming local concerts served soonest-first in user dashboard.

* Explore artists to track as well as their concerts on personalized detail show page.

***


### Search

Artist/Concert search among thousands of real-life entries.

<p align="center">
<img width="100%" height="100%" src="https://github.com/tocarevmax/DrumKick/blob/master/docs/screenshots/03_search_640px_frame_high.gif" />
</p>

***


### User authentication

Link to Demo User authentication is conveniently provided.

![signup](https://raw.githubusercontent.com/tocarevmax/DrumKick/master/docs/screenshots/02_signup.png)

***


### User Dashboard

Track artists and stay informed about them performing in the area.

![dashboard](https://raw.githubusercontent.com/tocarevmax/DrumKick/master/docs/screenshots/04_dashboard.png)

***


### Artist Detail Page

Track an artist at their personalized page and see when they visit your town as well as their entire tour route.

![artist detail](https://raw.githubusercontent.com/tocarevmax/DrumKick/master/docs/screenshots/05_artist_detail.png)

***


### Concert Detail Page

See detailed concert information and purchase tickets by navigating to corresponding ticket-vending website.

![concert detail](https://raw.githubusercontent.com/tocarevmax/DrumKick/master/docs/screenshots/06_concert_detail1.png)

***


### Front-End Store Management

Data fetched from the server throughout a session is conveniently structured and saved at the front-end store for efficient access and rendering.

<p align="center">
<img width="50%" height="50%" src="https://raw.githubusercontent.com/tocarevmax/DrumKick/master/docs/screenshots/07_reducer.png" />
</p>

***


### Future Directions

* Add search-by-date functionality.

* Set up mailer to serve personalized emails when a tracked artist is in town.

* Set up a rails task to weekly update the database if a band goes on tour.

* Expand schema to include separate 'venues' table. Build bi-directional Venue-Concert-Artist associations.

* Clearer concert detail information when it has more than one artist in the lineup.
