import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide54 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
        <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
        <div class="fix-3-12">
          <div class="pad shadow ae-4">
            <div class="price ae-5"><span class="currency">$</span>89</div>
            <h4 class="small margin-bottom-1 ae-6">Layers</h4>
            <div class="ae-7"><p class="small opacity-8 margin-bottom-3 equalElement">Design is not making beauty, beauty emerges from selection.</p></div>
            <div class="button green rounded wide crop ae-8">Purchase</div>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide54;