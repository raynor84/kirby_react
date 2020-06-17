import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide60 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <ul class="flex">
            <li class="col-6-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2 fromLeft"/>
              <Text fields={this.props.slide} addClass="large margin-bottom-3 ae-3 fromLeft"/>
              <ul class="tabs controller uppercase bold ae-4 fromCenter" data-slider-id="60-60">
                <li class="selected">Krabi Island</li>
                <li>Community</li>
                <li>Surfing</li>
              </ul>
            </li>
            <li class="col-6-12 left ae-5 fromCenter">
              <ul class="slider animated margin-top-tablet-4" data-slider-id="60-60">
                <li class="selected fromCenter">
                  <div class="popupTrigger videoThumbnail shadow rounded" data-popup-id="60-1">
                    <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                  </div>
                </li>
                <li class="fromCenter">
                  <div class="popupTrigger videoThumbnail shadow rounded" data-popup-id="60-2">
                    <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                  </div>
                </li>
                <li class="fromCenter">
                  <div class="popupTrigger videoThumbnail shadow rounded" data-popup-id="60-3">
                    <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                  </div>
                </li>
              </ul>
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
export default Slide60;