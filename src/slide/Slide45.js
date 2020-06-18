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
          {this.props.slide.list.map(function(fields, index) {
            return (
              <li class="col-3-12 ae-3 fromCenter">
                <Img fields={fields} addClass="round margin-bottom-3 margin-top-5" dataAction=""/>
                <div class="fix-3-12">
                <Heading fields={fields} addClass="margin-bottom-1 ae-1"/>
                <Text fields={fields} />
              </div>
                </li>
            );
            })}
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