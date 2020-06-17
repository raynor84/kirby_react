import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import PopupButton from './fields/PopupButton';
import ButtonA from './fields/ButtonA';
class Slide21 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="largest light margin-bottom-3 ae-2"/>
          <div class="fix-5-12">
            <ButtonA fields={this.props.slide}/>
            <PopupButton fields={this.props.slide} popupid="21-21"/>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide21;