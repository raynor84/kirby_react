import React from 'react';
import Section from './Section';
import HeadingWithPopup from './fields/HeadingWithPopup';
class Slide07 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-11-12">
          <HeadingWithPopup fields={this.props.slide}/>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide07;