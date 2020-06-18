import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import BlockText from './fields/BlockText';
import Text from './fields/Text';
class Slide47 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-11-12">
          <ul class="flex flex-47 margin-top-3">
          {this.props.slide.list.map(function(fields, index) {
            let ae=index+3;
            return (
              <li key={index} class="col-4-12 col-tablet-1-2 col-phablet-1-1">
							<div class={"fix-3-12 ae-"+ae}>
                <i class="material-icons">{fields.material_icon}</i>
                <Heading fields={fields} addClass="margin-bottom-1 ae-1"/>
               <BlockText fields={fields} addClass="small opacity-8" />
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
export default Slide47;