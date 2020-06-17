import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import PopupButton from './fields/PopupButton';
class Slide63 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <ul class="flex left margin-top-4">
            <li class="col-6-12 margin-bottom-1 ae-3">
              <h4 class="smaller margin-top-1 margin-bottom-1">Do I need programming skills to use Slides Framework?</h4>
              <p class="opacity-8">Yes, you need some basic HTML and CSS knowledge to use Slides Framework.</p>
            </li>
            <li class="col-6-12 margin-bottom-1 ae-4">
              <h4 class="smaller margin-top-1 margin-bottom-1">How many projects I can do with Slides Framework?</h4>
              <p class="opacity-8">As many as you need. Great, right?</p>
            </li>
            <li class="col-6-12 margin-bottom-1 ae-5">
              <h4 class="smaller margin-top-1 margin-bottom-1">Why don&#x2019;t you have a demo of Slides?</h4>
              <p class="opacity-8">Our presentation was created with Slides. Everything in this presentation from the navigation, share and the layouts of every slide is based on Slides Framework.</p>
            </li>
            <li class="col-6-12 margin-bottom-1 ae-6">
              <h4 class="smaller margin-top-1 margin-bottom-1">What am I buying and what do I get for $249?</h4>
              <p class="opacity-8">Each Slides customer will download PSD, Sketch, HTML and CSS files (approx. 800mb) to build their website. All clients have unlimited access to Slides Generator.</p>
            </li>
          </ul>
          <PopupButton fields={this.props.slide} popupid="63-63"/>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide63;