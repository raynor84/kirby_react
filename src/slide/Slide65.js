import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Img from './fields/Img';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
class Slide65 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          
          <ul class="flex later equal left flex-65 margin-top-4">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index +3;
                return (
            <li class={"col-6-12 equalElement ae-"+ae}>
              <Img fields={fields} addClass="margin-top-1 margin-bottom-1" />
                <i class="material-icons">{fields.material_icon}</i>
                <Heading fields={fields} addClass="margin-bottom-1" />
                <BlockText addClass="opacity-8 fix-4-12 toLeft" fields={fields} />
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
export default Slide65;