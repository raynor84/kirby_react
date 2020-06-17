import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide36 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12 toCenter">
          <Img fields={this.props.slide} addClass="round margin-bottom-1 ae-1 fromCenter" dataAction=""/>
          <Text fields={this.props.slide} addClass="ae-2 large margin-bottom-2"/>
          <Heading fields={this.props.slide} addClass="margin-bottom-2"/>
          <p class="ae-4 large margin-bottom-4"><span class="opacity-8">To create anything&#x2013;whether a short story or a magazine profile or a film or a sitcom&#x2013;is to believe, if only momentarily, you are capable of&#xA0;magic.</span></p>
        </div>
        <div class="fix-10-12 ae-5">
          <Img fields={this.props.slide} addClass="ipad-36" dataAction="zoom"/>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide36;