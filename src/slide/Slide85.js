import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';

class Slide85 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-6-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <ul class="flex flex-85 fixedSpaces equal ae-2 fromCenter" data-equal-collapse-width="767">
            
          {this.props.slide.list.map(function(fields, index) {
            let ae=parseFloat(index)+parseFloat(3);
            let style = {};
            if(fields.hervorheben.includes("Hervorheben")) {
              style={"background": "#f5fbfe"};
            }
            return (
            <li class={"col-6-12 col-tablet-1-2 col-phablet-1-1 margin-bottom-2 ae-"+ae}>
              <div class="pad" style={style}>
                <Heading fields={fields} addClass="margin-bottom-1" />
                <div class={"price ae-"+(ae+2)}><span class="currency">{fields.currency}</span>{fields.price}</div>
                <div class={"ae-"+(ae+2)}>
                  <Text fields={fields} addClass="smallest uppercase bolder opacity-4"/>
                </div>
                <div class={"margin-top-3 margin-bottom-3 equalElement ae-"+(ae+3)}>
                  <ul class="p small">
                  {fields.list.map(function(fields, index) {

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
export default Slide85;