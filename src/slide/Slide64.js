import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide64 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-10-12">
          <div class="fix-8-12 toCenter header-64">
            <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
            <Text fields={this.props.slide} addClass="larger light margin-bottom-4 ae-2"/>
          </div>
          <ul class="flex fixedSpaces later equal left flex-64">
            <li class="col-4-12 ae-3">
              <a href="#" class="cell-64 rounded equalElement">
                <i class="material-icons">panorama</i>
                <h4 class="smaller margin-bottom-1">HQ Photos</h4>
                <p class="opacity-8">Quickly swipe messages to your archive or trash.</p>
              </a>
            </li>
            <li class="col-4-12 ae-4">
              <a href="#" class="cell-64 rounded equalElement">
                <i class="material-icons">settings_applications</i>
                <h4 class="smaller margin-bottom-1">Components</h4>
                <p class="opacity-8">Scan entire conversations in a chat-like view.</p>
              </a>
            </li>
            <li class="col-4-12 ae-6">
              <a href="#" class="cell-64 rounded equalElement last">
                <i class="material-icons">queue_music</i>
                <h4 class="smaller margin-bottom-1">Best Music</h4>
                <p class="opacity-8">Unforgettable feelings through a quality music.</p>
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
export default Slide64;