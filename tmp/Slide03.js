import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Logo from './fields/Logo';
class Slide03 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-7-12">
          <div class="fix-3-12 margin-bottom-3">
            <Logo fields={this.props.slide}/>
          </div>
          <div class="fix-6-12"> 
            <Text fields={this.props.slide} addClass="large cropBottom ae-2"/>
          </div>
        </div>
          
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide03;