import React from 'react';
import Section from './Section';
import Logo from './fields/Logo';
import Img from './fields/Img';
class Slide04 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-5-12">
          <div class="fix-3-12 margin-bottom-5">
            <Logo fields={this.props.slide}/>
          </div>
          <div class="videoThumbnail shadow rounded ae-4 fromCenter popupTrigger" data-popup-id="4">
            <Img fields={this.props.slide} addClass="" dataAction=""/>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide04;