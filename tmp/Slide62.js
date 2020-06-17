import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide62 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-12-12">
          <ul class="flex reverse noSpaces verticalCenter">
            <li class="col-6-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2"/>
              <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-3"/>
              <ul class="flex fixedSpaces flex-62 later">
                <li class="col-6-12 ae-4">
                  <i class="material-icons">panorama</i>
                  <h4 class="smaller margin-bottom-1">HQ Photos</h4>
                  <p class="small opacity-8">Design is the conscious effort to impose a meaningful order.</p>
                </li>
                <li class="col-6-12 ae-5">
                  <i class="material-icons">settings_applications</i>
                  <h4 class="smaller margin-bottom-1">Useful Components</h4>
                  <p class="small opacity-8">Design is as much a matter of finding problems as it is solving them..</p>
                </li>
                <li class="col-6-12 ae-6">
                  <i class="material-icons">videocam</i>
                  <h4 class="smaller margin-bottom-1">Video Calls</h4>
                  <p class="small opacity-8">It&#x2019;s all fun and games until someone breaks a link.</p>
                </li>
                <li class="col-6-12 ae-7">
                  <i class="material-icons">face</i>
                  <h4 class="smaller margin-bottom-1">Photo Profile</h4>
                  <p class="small opacity-8">The definition of an expert is someone who knows what not to do.</p>
                </li>
              </ul>
            </li>
            <li class="col-6-12 left ae-1">
              <Img fields={this.props.slide} addClass="macbook-62 margin-bottom-tablet-3" dataAction="zoom"/>
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
export default Slide62;