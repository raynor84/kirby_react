import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import Img from './fields/Img';
class Slide28 extends React.Component {

	render() {
		return (

 <React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <ul class="flex verticalCenter later reverse">
            <li class="col-7-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
              <Text fields={this.props.slide} addClass="large ae-2 fromLeft"/>
              <ButtonA fields={this.props.slide}/>
            </li>
            <li class="col-5-12 cell-28 ae-1">
              <Img fields={this.props.slide} addClass="iphone-28" dataAction="zoom"/>
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
export default Slide28;