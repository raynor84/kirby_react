import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide96 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap padding-top-phablet-5">

        <div class="fix-8-12 toCenter margin-bottom-5">
          <Heading fields={this.props.slide} addClass="ae-1"/>
        </div>
        <div class="fix-12-12">
          <ul class="flex later equal left">
            <li class="image-96 col-4-12 padding-bottom-phablet-3">
              <Img fields={this.props.slide} addClass="rounded ae-3" dataAction="zoom"/>
            </li>
            <li class="col-8-12 padding-left-5 padding-phablet-0 music-96">
              <h3 class="smallest margin-bottom-2 equalElement ae-2">Top 50 Worldwide</h3>
              <div class="ae-3 margin-bottom-3"><Text fields={this.props.slide} addClass="opacity-8"/></div>
              <div class="sc-player-container fromRight">
                <a href="https://soundcloud.com/tecmusicnorway/ariana-grande-touch-it-slipenberg-remix" class="p sc-player margin-bottom-2 ae-3"/>
                <a href="https://soundcloud.com/aritusmusic/aritus-keep-1" class="p sc-player margin-bottom-2 ae-4"/>
                <a href="https://soundcloud.com/butch_le_butch/dua-lipa-blow-your-mind-mwah-butch-le-butch-lost-disco-version" class="p sc-player margin-bottom-2 ae-5"/>
                <a href="https://soundcloud.com/travelermusic/tuxedo-do-it-traveler-remix" class="p sc-player margin-bottom-2 ae-6"/>
                <a href="https://soundcloud.com/aaron-krause-music/jade-mason-self-remix" class="p sc-player margin-bottom-2 ae-7"/>
                <a href="https://soundcloud.com/fruitybeats/moi-je-fais-rien-petit-biscuit-remix" class="p sc-player margin-bottom-2 ae-8"/>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide96;