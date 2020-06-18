import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Text2 from './fields/Text2';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
class Slide48 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-8-12 toCenter">
          <Img fields={this.props.slide} addClass="round margin-bottom-1 ae-1 fromCenter" dataAction=""/>
          <Text fields={this.props.slide} addClass="large margin-bottom-2 ae-2"/>
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-3"/>
          <Text2 fields={this.props.slide} addClass="larger light ae-4 opacity-8"/>
        </div>
        <div class="fix-11-12 margin-top-5">
          <ul class="flex flex-48 later equal">
          {this.props.slide.list.map(function(fields, index) {
            let ae=index+5;
            return (
            <li class="col-4-12">
							<div class="fix-3-12">
                <i class={"material-icons fromCenter ae-"+ae}>{fields.material_icon}</i>
                <Heading fields={fields} addClass={"small margin-bottom-1 equalElement ae-" +ae+1} />
                <div class={"ae-"+ae+2}><BlockText fields={fields} class="opacity-8" /></div>
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
export default Slide48;