import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';

class Slide97 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap padding-top-phablet-5">
        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="ae-2 large margin-bottom-4"/>
        </div>
        <div class="fix-12-12">
        {this.props.slide.list.map(function(fields, index) { 
            let ae = index + 3;
            return (
          <div class={"frame-97 ae-"+ae}>
            <p class="white calendar-97 absolute"><span class="center uppercase block bold month">{fields.month}</span><span class="number normal">{fields.day}</span></p>
            <p class="large light align-left cropBottom inline-block">
              <span class="margin-left-10 middle margin-left-phablet-0 title-group-97">{fields.title}</span>
              <span class="inline-block middle phablet-block margin-top-phablet-1">{fields.location}</span>
              <ButtonA fields={fields} addClass="button green rounded small crop button-buy-97 margin-top-phablet-1"/>
            </p>
          </div>
            );})}
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide97;