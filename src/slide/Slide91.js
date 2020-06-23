import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import ButtonA from './fields/ButtonA';
class Slide91 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12 toCenter">
          <div class="fix-8-12">
            <Text fields={this.props.slide} addClass="large margin-bottom-2 ae-1"/>
            <Heading fields={this.props.slide} addClass="margin-bottom-4 ae-2 fromAbove"/>
            <ButtonA fields={this.props.slide} addClass="ae-3" />
          </div>
          <ul class="flex fixedSpaces left margin-top-10">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index + 4;
            return (
            <li class={"col-3-12 col-tablet-1-2 col-phablet-1-1 fromLeft ae-"+ae}>
             <Heading fields={fields} addClass="smaller margin-bottom-1" />
             <BlockText fields={fields} addClass="small opacity-8" />
            </li>
            ); })}
          </ul>
        </div>
                
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide91;