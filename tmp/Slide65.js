import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide65 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          
          <ul class="flex later equal left flex-65 margin-top-4">
            <li class="col-6-12 ae-3 equalElement">
              <i class="material-icons">near_me</i>
              <h4 class="small margin-bottom-1">Location</h4>
              <p class="opacity-8 fix-4-12 toLeft">The best stories of the week, delivered right to your inbox. No spam, we promise.</p>
            </li>
            <li class="col-6-12 ae-4 equalElement">
              <i class="material-icons">layers</i>
              <h4 class="small margin-bottom-1">Layers</h4>
              <p class="opacity-8 fix-4-12 toLeft">Less time shopping means more time Doing Things, so we created Slides Framework. It&#x2019;s built to impress!</p>
            </li>
            <li class="col-6-12 ae-5 equalElement">
              <i class="material-icons">videocam</i>
              <h4 class="small margin-bottom-1">Video Calls</h4>
              <p class="opacity-8 fix-4-12 toLeft">Many months of experimentation and trial and error in order to bring out the best visual metaphors.</p>
            </li>
            <li class="col-6-12 ae-6">
              <i class="material-icons">local_florist</i>
              <h4 class="small margin-bottom-1">Grow</h4>
              <p class="opacity-8 fix-4-12 toLeft">Ideally, the icons should blend so well into your next project, as if they&#x2019;re custom-designed for you.</p>
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
export default Slide65;