import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide100 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap padding-top-phablet-5">

        <div class="fix-12-12">
          <ul class="flex later">
            <li class="col-7-12 left ae-1  flex-slide-100">

              <div class="wrap-img-100" style="background-image: url(assets/img/image-100.jpg);">
                <div class="blackout rounded"/>
                <div class="wrap-text-100 wrap-text-100">
                  <Heading fields={this.props.slide} addClass="margin-bottom-1 ae-2"/>
                  <Text fields={this.props.slide} addClass="large ae-3 margin-bottom-2"/>
                  <ButtonA fields={this.props.slide}/>
                </div>
              </div>
            </li>
            <li class="col-5-12 left padding-left-3 padding-left-phablet-0 margin-top-phablet-3">
              <h3 class="ae-2 smallest margin-bottom-3">Recent Posts</h3>
                
              <a href="#" class="item-100 rounded margin-bottom-2">
                <h4 class="small margin-bottom-1">40 Lessons About Web You Need To Learn Before You Hit</h4>
                <p class="smallest uppercase bold opacity-8 cropBottom">Learn More</p>
              </a>
              <a href="#" class="item-100 rounded margin-bottom-2">
                <h4 class="small margin-bottom-1">40 Lessons About Web You Need To Learn Before You Hit</h4>
                <p class="smallest uppercase bold opacity-8 cropBottom">Learn More</p>
              </a>
              <a href="#" class="item-100 rounded">
                <h4 class="small margin-bottom-1">40 Lessons About Web You Need To Learn Before You Hit</h4>
                <p class="smallest uppercase bold opacity-8 cropBottom">Learn More</p>
              </a>
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
export default Slide100;