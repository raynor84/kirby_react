import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide32 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-12-12">
          <ul class="flex reverse">
            <li class="col-6-12 left cell-32">
              <Heading fields={this.props.slide} addClass="margin-bottom-2"/>
              <Text fields={this.props.slide} addClass="ae-3 larger light margin-bottom-3"/>
              <ul class="items-32">
                <li class="fix-4-12 toLeft ae-4 margin-bottom-3">
                  <h4 class="small margin-bottom-1">Fashion</h4>
                  <p class="opacity-8">Fashion is a language that creates itself in clothes to interpret reality.</p>
                </li>
                <li class="fix-4-12 toLeft ae-5 margin-bottom-3">
                   <h4 class="small margin-bottom-1">Creativity</h4>
                  <p class="opacity-8">Clear thinking at the wrong moment can stifle creativity.</p>
                </li>
              </ul>
            </li>
            <li class="col-6-12 left ae-1 fromRight">
              <Img fields={this.props.slide} addClass="ipad-32 margin-bottom-tablet-4" dataAction="zoom"/>
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
export default Slide32;