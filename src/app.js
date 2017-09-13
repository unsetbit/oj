import React from 'react';
import {render} from 'react-dom';


class App extends React.Component {
  render () {
    return <section>
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
            Overall, traveling to Turkey is easy: Istanbul and Antalya are major tourist
            destinations already and Ozan will sort out the logistics of your
            stay in Sinop. After you <a href="http://jessaandozan.rsvpify.com" target="_blank">sign
            up</a> we will email you to figure out your specific trip plan
            and guide you through booking transportation and lodging for your trip.
          </p>
          <p>
            If you’re a seasoned traveler the only thing you’ll really need to
            know is that <a href="https://p.turkishairlines.com/en-us/" target="_blank">Turkish
            Airlines</a> has flights between Istanbul and Sinop daily. It will be difficult
            to find English speakers in Sinop, so it’s important to let us know when
            you’ll be arriving in Sinop so that we can arrange a pick up from the
            airport.
          </p>
          <p>
            Turkey requires a visa fee to enter, it can be bought at the airport
            upon arrival or ahead of time <a href="https://www.evisa.gov.tr/en/" target="_blank">online</a>.
          </p>
          <hr></hr>
          <h2>Suggested Itinerary</h2>
          <p>
            In order to make the most of your trip, we recommend you take about
            12 days: do some touristy stuff in Istanbul, attend the wedding in
            Sinop, then relax in Antalya. This trip plan would cost about
            $2,100/person for transportation, lodging, and food.
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
            Plan to arrive in Sinop on June 27. Sinop has a history as long
            as Istanbul’s but is a much smaller city with a population of 40 thousand
            (who are among the <a href="http://www.bbc.com/travel/story/20170810-the-turkish-city-that-discovered-the-key-to-happiness" target="_blank">happiest in Turkey</a>).
          </p>
          <ul>
            <li>
              Wednesday, June 27 &ndash; Fly to Sinop
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
          </ul>
          <p>
            After the wedding, we will fly to Antalya, where Ozan
            grew up. Antalya is a major tourist destination, a city with a
            population of 1.2 million on the mediterranean: beautiful beaches,
            lots of resorts, and a tremendous amount of ancient ruins.
          </p>
          <ul>
            <li>
              Sunday, July 1 &ndash; Fly to Antalya
            </li>
            <li>
              Monday, July 2 &ndash; Explore Antalya
            </li>
            <li>
              Tuesday, July 3 &ndash; Enjoy the beach
            </li>
            <li>
              Wednesday, July 4 &ndash; Explore Yanartas
            </li>
            <li>
              Thursday, July 5 &ndash; Fly home
            </li>
          </ul>
      </section>
    ;
  }
}

render(<App/>, document.getElementById('app'));
