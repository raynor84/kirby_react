import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import Img from './fields/Img';
class Slide34 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <ul class="flex verticalCenter reverse">
            <li class="col-6-12 left middle">
              <div class="fix-5-12 toLeft margin-left-tablet-auto margin-right-tablet-auto">
                <Heading fields={this.props.slide} addClass="margin-bottom-2"/>
                <Text fields={this.props.slide} addClass="ae-2 fromLeft large margin-bottom-4"/>
                <ButtonA fields={this.props.slide}/><ButtonB fields={this.props.slide}/>
              </div>
            </li>
            <li class="col-6-12">
              <Img fields={this.props.slide} addClass="ae-4 margin-bottom-tablet-4" dataAction="zoom"/>
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
export default Slide34;