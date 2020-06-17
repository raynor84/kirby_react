import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide50 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-10-12 left">
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <ul class="flex later margin-top-4">
            <li class="col-4-12 left ae-3">
              <h4 class="small margin-bottom-1 ae-4">Meet quick</h4>
              <div class="ae-5"><p class="small opacity-8">Design is so critical it should be on the agenda of every meeting.</p></div>
            </li>
            <li class="col-4-12 left ae-4">
              <h4 class="small margin-bottom-1 ae-5">Better interface</h4>
              <div class="ae-6"><p class="small opacity-8">Space and light and order. Those are the things that men.</p></div>
            </li>
            <li class="col-4-12 left ae-5">
              <h4 class="small margin-bottom-1 ae-6">Listen your mind</h4>
              <div class="ae-7"><p class="small opacity-8">Design is not making beauty, beauty emerges from selection.</p></div>
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
export default Slide50;