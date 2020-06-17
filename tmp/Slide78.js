import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Logo from './fields/Logo';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
class Slide78 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-7-12">
          <div class="fix-3-12">
            <Logo fields={this.props.slide}/>
          </div>
          <div class="ae-2 margin-top-2">
            <Text fields={this.props.slide} addClass="larger light"/>
          </div>
          <ButtonA fields={this.props.slide}/><ButtonB fields={this.props.slide}/>
          <div class="ae-10 fromRight margin-top-1">
            <p class="small"><span class="opacity-8">Also, we have a version for</span> <a class="bold" href="#">Mac</a></p>
          </div>
        </div>
          
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide78;