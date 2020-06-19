import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import ButtonA from './fields/ButtonA';
class Slide54 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
        <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
        <div class="fix-3-12">
        {this.props.slide.list.map(function(fields, index) {
            let ae=parseFloat(index)+parseFloat(4);
            return (
          <div key={index} class={"pad shadow ae-"+ae}>
            <div class={"price ae-"+(ae+1)}><span class="currency">{fields.currency}</span>{fields.price}</div>
            <Heading fields={fields} addClass={"margin-bottom-1 ae-"+(ae+2)} />
            <div class={"ae-"+(ae+3)}><BlockText fields={fields} addClass="small opacity-8 margin-bottom-3 equalElement" /></div>
            <ButtonA fields={fields} addClass={"button green rounded wide crop ae-"+(ae+4)} />
          </div>
            );
          })}
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide54;