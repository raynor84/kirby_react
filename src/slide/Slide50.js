import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
class Slide50 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-10-12 left">
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <ul class="flex later margin-top-4">
          {this.props.slide.list.map(function(fields, index) {
            let ae=parseFloat(index)+parseFloat(3);
            
            return (
            <li class={"col-4-12 left ae-"+ae}>
              <Heading fields={fields} addClass={"margin-bottom-1 ae-"+(ae +1 )} />
              <div class={"ae-"+(ae+2)}>
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
export default Slide50;