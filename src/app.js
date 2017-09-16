import React from 'react';
import {render} from 'react-dom';


class App extends React.Component {
  render () {
    return <div><img width="100%" src="assets/oj.jpg"></img><section className="container"><section>
        <center>
          <h1>Jessa ❤️ Ozan</h1>
          <p>
            We’re getting married!
            We’ll be celebrating on June 30, 2018 in Sinop, Turkey.&nbsp;
            <a href="http://jessaandozan.rsvpify.com" target="_blank">Please sign up here to join us.</a>
          </p>
          </center>
          <hr></hr>
          <h2>Planning Your Trip</h2>
          <p>
            We’ve provided a suggested itinerary below to help structure your trip.
            Traveling to Turkey is easy: Istanbul (where you’ll enter and exit Turkey) is a major tourist destination and Ozan will sort out all the logistics of your
            stay in Sinop. After you <a href="http://jessaandozan.rsvpify.com" target="_blank">sign up</a> we will email you to come up with a specific trip plan and guide you through booking transportation and lodging.
          </p>
          <hr></hr>
          <h2>Suggested Itinerary</h2>
          <p>
            In order to make the most of your trip, we recommend you plan for around
            12 days, starting off with touristy stuff in Istanbul then attending the wedding in Sinop, followed by a choose-your-own-adventure. Expect to spend about $1,300 for a round trip ticket to Turkey from the U.S. and about $20/day for food, and $20/day for lodging (assuming you’re sharing with at least one other person). A 12-night trip to Turkey should cost somewhere around $2,200 per person (padding included).
          </p>
          <p>
            Your first stop in Turkey will be Istanbul. If you’ve never been to
            Turkey, you must spend some time exploring Istanbul: it’s a
            2,500-year-old city with a population of 14 million.
          </p>
          <ul>
            <li>
              Saturday, June 23 &ndash; Fly into Istanbul
            </li>
            <li>
              Sunday, June 24 &ndash; Explore Beyoglu
            </li>
            <li>
              Monday, June 25 &ndash; Explore Sultanahmet & Grand Bazaar
            </li>
            <li>
              Tuesday, June 26 &ndash; Explore Kadikoy
            </li>
          </ul>
          <p>
            Plan to arrive in Sinop on June 27. Istanbul to Sinop is about a day by bus and an hour by plane. Depending on the number of people signing up we may rent a bus to simplify logistics of getting people in and out of Sinop. Sinop has a history as long
            as Istanbul’s but is a much smaller city with a population of 40 thousand
            (who are among the <a href="http://www.bbc.com/travel/story/20170810-the-turkish-city-that-discovered-the-key-to-happiness" target="_blank">happiest in Turkey</a>).
          </p>
          <ul>
            <li>
              Wednesday, June 27 &ndash; Bus ride to Sinop
            </li>
            <li>
              Thursday, June 28 &ndash; Explore Sinop
            </li>
            <li>
              Friday, June 29 &ndash; Visit Ozan’s grandparents’ village
            </li>
            <li>
              Saturday, June 30 &ndash; Celebrate Ozan and Jessa’s Wedding
            </li>
            <li>
              Sunday, July 1 &ndash; Bus ride to Istanbul
            </li>
          </ul>
          <p>
            After the wedding you have many options: Greece is right next door,
            as is the rest of Europe, Russia, and the Middle East. Within Turkey
            there are several tourist-friendly cities: <a href="https://www.lonelyplanet.com/turkey/aegean-coast/izmir" target="_blank">Izmir</a>, <a href="https://www.lonelyplanet.com/turkey/aegean-coast/bodrum" target="_blank">Bodrum</a>, and <a href="https://www.lonelyplanet.com/turkey/mediterranean-coast/antalya" target="_blank">Antalya</a>. <a href="https://www.lonelyplanet.com/turkey/aegean-coast/pamukkale" target="_blank">Pamukkale</a> and <a href="https://www.lonelyplanet.com/turkey/cappadocia-kapadokya" target="_blank">Cappadocia</a> are also popular tourist attractions
            within Turkey, but Ozan has never been to them so he can’t recommend them.
          </p>
      </section></section></div>
    ;
  }
}

render(<App/>, document.getElementById('app'));
