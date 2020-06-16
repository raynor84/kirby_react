import React from 'react';
import Section from './Section';
import Logo from './fields/Logo';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import Img from './fields/Img';
class Slide05 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <ul class="flex">
          <li class="col-12-12">
            <div class="fix-4-12">
              <Logo fields={this.props.slide}/>
              <ButtonA fields={this.props.slide}/><ButtonB fields={this.props.slide}/>
            </div>
          </li>
          <li class="col-12-12">
            <div class="fix-6-12 ae-2 margin-top-3">
              <Img fields={this.props.slide} addClass="iphone-5" dataAction="zoom"/>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide05;