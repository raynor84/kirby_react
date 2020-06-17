import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide80 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
          <div class="ae-2 fromLeft">
            <Text fields={this.props.slide} addClass="large opacity-8"/>
          </div>
        </div>

        <div class="fix-10-12 margin-top-2">
          <ul class="flex flex-80 fixedSpaces equal reverse">
            <li class="col-6-12">
              <div class="box-80 padding-4 equalElement left ae-3 rounded">
                <p class="large cropTop ae-5"><span class="opacity-8">I think design would be better if designers were much more skeptical about its applications. If you believe in the potency of your craft, where you choose to dole it out is not something to take lightly.</span></p>
                <div class="margin-top-5 ae-6">
                  <h4 class="smallest">Paul Rand</h4>
                  <p class="small opacity-8 cropBottom">Graphic Designer, Art Director</p>
                </div>
              </div>
            </li>
            <li class="col-6-12">
              <div class="videoThumbnail rounded shadow wide cover equalElement popupTrigger ae-4 padding-14" data-popup-id="80-80" style="background:url(assets/img/image-80.jpg);"/>
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
export default Slide80;