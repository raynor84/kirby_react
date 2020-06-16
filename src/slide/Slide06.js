import React from 'react';
import Section from './Section';
import Logo from './fields/Logo';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import Img from './fields/Img';
class Slide06 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-4-12">
          <Logo fields={this.props.slide}/>
          <ButtonA fields={this.props.slide}/><ButtonB fields={this.props.slide}/>
        </div>
        <div class="fix-12-12 ae-2 margin-top-3">
          <Img fields={this.props.slide} addClass="ipad-6" dataAction="zoom"/>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide06;