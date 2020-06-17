import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import PopupButton from './fields/PopupButton';
class Slide71 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 margin-bottom-2"/>
          <div class="ae-2"><Text fields={this.props.slide} addClass="larger light opacity-8 margin-bottom-2"/></div>
          <PopupButton fields={this.props.slide} popupid="71-71"/>
        </div>
        <div class="fix-12-12 margin-top-4">
          <ul class="flex fixedSpaces later equal left flex-71">
            <li class="col-4-12 ae-3">
              <a href="#" class="cell-71 rounded equalElement">
                <i class="material-icons">panorama</i>
                <h4 class="smaller margin-bottom-1">HQ Photos</h4>
                <p class="small opacity-8">Quickly swipe messages to your archive or trash. <span class="nobr text-blue">Learn more &#x2192;</span></p>
              </a>
            </li>
            <li class="col-4-12 ae-4">
              <a href="#" class="cell-71 rounded equalElement">
                <i class="material-icons">settings_applications</i>
                <h4 class="smaller margin-bottom-1">Useful Components</h4>
                <p class="small opacity-8">Scan entire conversations in a chat-like view. <span class="nobr text-blue">Learn more &#x2192;</span></p>
              </a>
            </li>
            <li class="col-4-12 ae-6">
              <a href="#" class="cell-71 rounded equalElement last">
                <i class="material-icons">face</i>
                <h4 class="smaller margin-bottom-1">Best Music</h4>
                <p class="small opacity-8">Unforgettable feelings through a quality music. <span class="nobr text-blue">Learn more &#x2192;</span></p>
              </a>
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
export default Slide71;