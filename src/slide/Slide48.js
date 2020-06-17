import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide48 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-8-12 toCenter">
          <Img fields={this.props.slide} addClass="round margin-bottom-1 ae-1 fromCenter" dataAction=""/>
          <Text fields={this.props.slide} addClass="large margin-bottom-2 ae-2"/>
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-3"/>
          <p class="larger light ae-4"><span class="opacity-8">One of the best ways to make a great vacation quickly horrible is to choose the wrong accommodations for your&#xA0;trip.</span></p>
        </div>
        <div class="fix-11-12 margin-top-5">
          <ul class="flex flex-48 later equal">
            <li class="col-4-12">
							<div class="fix-3-12">
                <i class="material-icons ae-5 fromCenter">fingerprint</i>
                <h4 class="small margin-bottom-1 equalElement ae-6">Meet quick</h4>
                <div class="ae-7"><p class="opacity-8">Do you validate other people&#x2019;s markup? Yes? You&#x2019;re an asshole.</p></div>
              </div>
            </li>
            <li class="col-4-12">
							<div class="fix-3-12">
                <i class="material-icons ae-6 fromCenter">switch_camera</i>
                <h4 class="small margin-bottom-1 equalElement ae-7">Resize picture</h4>
                <div class="ae-8"><p class="opacity-8">No, Watson, this was not done by accident, but by design.</p></div>
              </div>
            </li>
            <li class="col-4-12">
							<div class="fix-3-12">  
                <i class="material-icons ae-7 fromCenter">notifications_off</i>
                <h4 class="small margin-bottom-1 equalElement ae-8">Notifications</h4>
                <div class="ae-9"><p class="opacity-8">Now that we can do anything, what should we do?</p></div>
              </div>
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
export default Slide48;