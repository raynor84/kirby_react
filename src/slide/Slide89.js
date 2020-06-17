import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide89 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <ul class="flex left verticalCenter">
            <li class="col-7-12 fromBottomLeft">
              <div class="fix-6-12 toLeft">
                <Text fields={this.props.slide} addClass="large opacity-8 margin-bottom-2 ae-1"/>
                <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2"/>
                <div class="ae-3"><p class="large opacity-8">No matter how many times your amazing, absolutely brilliant work is rejected by the client, for whatever dopey, arbitrary reason, there is often another amazing, absolutely brilliant solution&#xA0;possible.</p></div>
                <ul class="flex fixedSpaces">
                  <li class="col-6-12 ae-3">
                    <h4 class="smaller margin-top-3 margin-bottom-1">Camera</h4>
                    <p class="opacity-8">Scan entire conversations with friends in a chat-like view.</p>
                  </li>
                  <li class="col-6-12 ae-4">
                    <h4 class="smaller margin-top-3 margin-bottom-1">Messages</h4>
                    <p class="opacity-8">Quickly swipe down messages to your archive or trash.</p>
                  </li>
                  <li class="col-6-12 ae-5">
                    <h4 class="smaller margin-top-3 margin-bottom-1">Music Center</h4>
                    <p class="opacity-8">Unforgettable feelings through the best quality music.</p>
                  </li>
                  <li class="col-6-12 ae-6">
                    <h4 class="smaller margin-top-3 margin-bottom-1">Channels</h4>
                    <p class="opacity-8">Comment, read reviews, and compare customer ratings.</p>
                  </li>
                </ul>
              </div>
            </li>
            <li class="col-5-12 bottom">
              <div class="videoThumbnail shadow rounded popupTrigger margin-bottom-3 ae-7" data-popup-id="89-89">
                <Img fields={this.props.slide} addClass="wide" dataAction=""/>
              </div>
              <Img fields={this.props.slide} addClass="shadow rounded ae-8" dataAction="zoom"/>
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
export default Slide89;