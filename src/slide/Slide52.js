import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import ButtonA from './fields/ButtonA';
import Img from './fields/Img';
class Slide52 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-6-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
        </div>
        {this.props.slide.list.map(function(fields, index) {
            let ae=parseFloat(index)+parseFloat(3);
            return (

        <div class="fix-3-12">
          <div class={"pad shadow ae-"+ae}>
            <Img fields={fields} addClass={"round margin-bottom-2 ae-"+(ae+2)} dataAction=""/>
            
            <Heading fields={fields} addClass={"small margin-bottom-1 ae-"+(ae+3)} />
            <div class={"ae-"+(ae+3)}><BlockText fields={fields} addClass="small opacity-8 margin-bottom-3 equalElement" /></div>
            <ButtonA fields={fields} addClass={"button rounded wide crop ae-"+(ae+4)} />
          </div>
        </div>
            );
            })}
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide52;