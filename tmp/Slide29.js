import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import Img from './fields/Img';
class Slide29 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <ul class="flex verticalCenter later">
            <li class="col-5-12 ae-1 cell-29">
              <Img fields={this.props.slide} addClass="iphone-29" dataAction="zoom"/>
            </li>
            <li class="col-7-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
              <Text fields={this.props.slide} addClass="large ae-2 fromLeft"/>
              <ButtonA fields={this.props.slide}/>
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
export default Slide29;