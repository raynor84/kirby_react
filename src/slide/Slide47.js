import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide47 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-11-12">
          <ul class="flex flex-47 margin-top-3">
            <li class="col-4-12 col-tablet-1-2 col-phablet-1-1">
							<div class="fix-3-12 ae-3">
                <i class="material-icons">switch_camera</i>
                <h4 class="smallest margin-bottom-1">HQ Photos</h4>
							  <p class="small opacity-8">Design is the conscious effort to impose a meaningful&#xA0;order.</p>
              </div>
            </li>
            <li class="col-4-12 col-tablet-1-2 col-phablet-1-1">
							<div class="fix-3-12 ae-4">
                <i class="material-icons">settings_applications</i>
                <h4 class="smallest margin-bottom-1">Useful Components</h4>
                <p class="small opacity-8">Getting addicted to design is really bad for&#xA0;design.</p>
              </div>
            </li>
            <li class="col-4-12 col-tablet-1-2 col-phablet-1-1">
							<div class="fix-3-12 ae-5">
                <i class="material-icons">palette</i>
                <h4 class="smallest margin-bottom-1">Inspiration</h4>
                <p class="small opacity-8">Art is making something out of nothing and selling&#xA0;it.</p>
              </div>
            </li>
            <li class="col-4-12 col-tablet-1-2 col-phablet-1-1">
							<div class="fix-3-12 ae-6">
                <i class="material-icons">videocam</i>
                <h4 class="smallest margin-bottom-1">Video Calls</h4>
                <p class="small opacity-8">It&#x2019;s all fun and games until someone breaks a&#xA0;link.</p>
              </div>
            </li>
            <li class="col-4-12 col-tablet-1-2 col-phablet-1-1">
							<div class="fix-3-12 ae-7">
                <i class="material-icons">face</i>
                <h4 class="smallest margin-bottom-1">Photo Showcase</h4>
                <p class="small opacity-8">The definition of an expert is someone who knows what not to&#xA0;do.</p>
              </div>
            </li>
            <li class="col-4-12 col-tablet-1-2 col-phablet-1-1">
							<div class="fix-3-12 ae-8">
                <i class="material-icons">my_location</i>
                <h4 class="smallest margin-bottom-1">Connect</h4>
                <p class="small opacity-8">Getting addicted to design is really bad for&#xA0;design.</p>
              </div>
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
export default Slide47;