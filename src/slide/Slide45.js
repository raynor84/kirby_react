import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide45 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <ul class="flex fixedSpaces later">
            <li class="col-3-12 ae-3 fromCenter">
              <Img fields={this.props.slide} addClass="round margin-bottom-3 margin-top-5" dataAction=""/>
              <div class="fix-3-12">
                <h4 class="smallest margin-bottom-1">Step 1</h4>
                <p><span class="opacity-8">It&#x2019;s very easy to be different, but very difficult to be better.</span></p>
              </div>
            </li>
            <li class="col-3-12 ae-4 fromCenter">
              <Img fields={this.props.slide} addClass="round margin-bottom-3 margin-top-5" dataAction=""/>
              <div class="fix-3-12">
                <h4 class="smallest margin-bottom-1">Step 2</h4>
                <p><span class="opacity-8">Space and light and order. Those are the things that men.</span></p>
              </div>
            </li>
            <li class="col-3-12 ae-5 fromCenter">
              <Img fields={this.props.slide} addClass="round margin-bottom-3 margin-top-5" dataAction=""/>
              <div class="fix-3-12">
                <h4 class="smallest margin-bottom-1">Step 3</h4>
                <p><span class="opacity-8">The proper study of mankind is the science of design.</span></p>
              </div>
            </li>
            <li class="col-3-12 ae-6 fromCenter">
              <Img fields={this.props.slide} addClass="round margin-bottom-3 margin-top-5" dataAction=""/>
              <div class="fix-3-12">
                <h4 class="smallest margin-bottom-1">Step 4</h4>
                <p><span class="opacity-8">The proper study of mankind is the science of design.</span></p>
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
export default Slide45;