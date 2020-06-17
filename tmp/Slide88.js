import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import PopupButton from './fields/PopupButton';
class Slide88 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <PopupButton fields={this.props.slide} popupid="88-88"/>
        </div>

        <div class="fix-12-12">
          <ul class="flex later margin-top-6 left">
            <li class="col-6-12 box-88">
              <div class="quoteBubble ae-4 fromLeft">
                <Text fields={this.props.slide} addClass="larger light cropBottom opacity-8"/>
              </div>
              <p class="margin-top-3 ae-6 fromRight"><strong>Paul Rand</strong> <span class="opacity-7">Graphic designer, Art director</span></p>
            </li>
            <li class="col-6-12">
              <ul class="flex fromBottomRight fixedSpaces margin-top-2">
                <li class="col-6-12 col-phablet-1-2 ae-6">
                  <h4 class="smaller margin-bottom-1">Mockup</h4>
                  <p class="opacity-8 margin-bottom-3">Select premade adjustment layers with ease.</p>
                </li>
                <li class="col-6-12 col-phablet-1-2 ae-7">
                  <h4 class="smaller margin-bottom-1">Layers</h4>
                  <p class="opacity-8 margin-bottom-3">Open a smart object, paste your design and save.</p>
                </li>
                <li class="col-6-12 col-phablet-1-2 ae-8">
                  <h4 class="smaller margin-bottom-1">Branding</h4>
                  <p class="opacity-8 margin-bottom-3">Select a background, drop items that you like.</p>
                </li>
                <li class="col-6-12 col-phablet-1-2 ae-9">
                  <h4 class="smaller margin-bottom-1">Present</h4>
                  <p class="opacity-8 margin-bottom-3">Create items by pasting your design, text or logo.</p>
                </li>

              </ul>
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
export default Slide88;