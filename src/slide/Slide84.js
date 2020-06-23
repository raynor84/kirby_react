import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';

class Slide84 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <ul class="flex flex-84 noSpaces equal equalMobile ae-2 fromCenter">
            
          {this.props.slide.list.map(function(fields, index) {
            let ae=parseFloat(index)+parseFloat(3);
            let style = {};
            if(fields.hervorheben.includes("Hervorheben")) {
              style={"background": "#f5fbfe"};
            }
            return (
              <li class="col-3-12 ae-3" style={style}>
              <Heading addClass="margin-bottom-1" fields={fields} />
              <div class="price ae-5"><span class="currency">{fields.currency}</span>{fields.price}</div>
              <div class="ae-5">
                <Text fields={fields} addClass="smallest uppercase bolder opacity-4"/>
              </div>
              <div class="margin-top-3 margin-bottom-3 equalElement ae-6">
                <ul class="p small">
                {fields.list.map(function(fields, index) {
                let ae=parseFloat(index)+parseFloat(3);
                console.log(fields.strong);
                if(fields.strong.includes("Hervorheben")) {
                  return (
                    <li><strong>{fields.text}</strong></li>
                  );
                } else {
                  return (
                    <li class="opacity-7">{fields.text}</li>
                  );
                }
                })}

                </ul>
              </div>
              <ButtonA fields={fields} addClass="wide cropSides cropBottom"/>
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
export default Slide84;