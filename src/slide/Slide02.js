import React from 'react';
import Section from './Section';
import Logo from './fields/Logo';
import PopupButton from './fields/PopupButton';
class Slide02 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-3-12">
          <Logo fields={this.props.slide}/>
        </div>
        <PopupButton fields={this.props.slide} popupid="2"/>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide02;