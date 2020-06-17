import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide87 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
          <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2 fromLeft"/>
          <div class="videoThumbnail margin-bottom-4 noShadow noTint ae-3 popupTrigger" data-popup-id="87-87">
            <Img fields={this.props.slide} addClass="" dataAction=""/>
          </div>
          <ul class="flex fixedSpaces left box-87 equal equalMobile">
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1 equalElement margin-top-1 ae-5 fromCenter">
             <h4 class="smaller margin-bottom-1">Sync Faster</h4>
             <p class="small opacity-8">Quickly swipe messages to your archive or&#xA0;trash.</p>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1 equalElement margin-top-1 ae-6 fromCenter">
             <h4 class="smaller margin-bottom-1">Automate</h4>
             <p class="small opacity-8">Just select a photo, drop items that you&#xA0;like.</p>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1 equalElement margin-top-1 ae-7 fromCenter">
             <h4 class="smaller margin-bottom-1">Branding</h4>
             <p class="small opacity-8">Just select a color and drop items that you&#xA0;like.</p>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1 equalElement margin-top-1 ae-8 fromCenter">
             <h4 class="smaller margin-bottom-1">Creative Ideas</h4>
             <p class="small opacity-8">Create unique items by pasting your&#xA0;design.</p>
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
export default Slide87;