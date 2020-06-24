import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide31 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap left">
          
        <div class="fix-12-12">
          <ul class="flex reverse">
            <li class="col-6-12">
              <div class="col-11-12 toLeft"> 
                <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
                <Text fields={this.props.slide} addClass="ae-2 large"/>

                <div class="relative ae-3">
                  <Img fields={this.props.slide} addClass="round avatar-31 fromCenter" dataAction=""/>
                  <div class="padding-left-10 padding-left-phablet-8">
                    <h4 class="small margin-bottom-1">Paul Rand</h4>
                    <p class="opacity-8 margin-bottom-1">Graphic designer, Art director</p>
                    <p class="small opacity-8 fix-4-12 toLeft">&#xAB;Just because something looks good doesn&#x2019;t mean its useful. And just because something is useful does not make it&#xA0;beautiful.&#xBB;</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="col-6-12 left ae-1">
              <Img imageField={this.props.slide.image2[0]} addClass="ipad-31 margin-bottom-tablet-4" dataAction="zoom"/>
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
export default Slide31;