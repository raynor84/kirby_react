import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import Img from './fields/Img';
class Slide66 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-10-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="cropBottom large ae-2"/>
        </div>
        <div class="fix-10-12">
          <ul class="flex later equal left">
            <li class="col-4-12 margin-top-5">
              <ButtonA fields={this.props.slide}/>
              <h4 class="smallest margin-top-1 ae-4">The Skinny on LCD Monitors</h4>
              <div class="margin-top-1 ae-5"><p class="small opacity-8">The monkey-rope is found in all whalers; but it was on.</p></div>
            </li>
            <li class="col-4-12 margin-top-5">
              <div class="rounded videoThumbnail shadow video-66 popupTrigger margin-bottom-2 ae-4" data-popup-id="66-66">
                <Img fields={this.props.slide} addClass="wide" dataAction=""/>
              </div>
              <h4 class="smallest margin-top-1 ae-5">What is HDMI</h4>
              <div class="margin-top-1 ae-6"><p class="small opacity-8">In the tumultuous business of cutting-in and attending.</p></div>
            </li>
            <li class="col-4-12 margin-top-5">
              <ButtonB fields={this.props.slide}/>
              <h4 class="smallest margin-top-1 ae-6">Download Free Song for iPod</h4>
              <div class="margin-top-1 ae-7"><p class="small opacity-8">So strongly and metaphysically did I conceive of my situation.</p></div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide66;