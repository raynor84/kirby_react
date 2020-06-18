import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
class Slide49 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1" />
          <Text fields={this.props.slide} addClass="large ae-2" />
        </div>
        <div class="fix-10-12 margin-top-4">  
          <ul class="flex flex-49 later equal">
          {this.props.slide.list.map(function(fields, index) {
            return (
              <li class="col-4-12">
                <div class="fix-3-12">
                  <i class="material-icons ae-3 fromCenter">{fields.material_icon}</i>
                  <Heading fields={fields} addClass="margin-bottom-1 equalElement ae-4" />
                  <div class="ae-5">
                    <BlockText fields={fields} addClass="opacity-8" />
                </div>
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
export default Slide49;