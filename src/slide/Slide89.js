import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
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
                <Text field={this.props.slide.subtitle} addClass="large margin-bottom-2 ae-1"/>
                <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2"/>
                <div class="ae-3"><BlockText fields={this.props.slide} addClass="large opacity-8" /></div>
                <ul class="flex fixedSpaces">
                {this.props.slide.list.map(function(fields, index) {
                let ae = index +3;
                return (
                  <li class={"col-6-12 ae-"+ae}>
                    <Heading fields={fields} addClass="margin-top-3 margin-bottom-1"/>
                    <BlockText fields={fields} addClass="opacity-8" />
                    </li>
                )})}
                </ul>
              </div>
            </li>
            <li class="col-5-12 bottom">
                <Img fields={this.props.slide} addClass="margin-bottom-3 shadow rounded ae-7" dataAction="zoom"/>
              <Img 
                imageField={this.props.slide.image1[0]} 
                imageHeight={this.props.slide.image1_height}
                imageWidth={this.props.slide.image1_width}
                imageAlt={this.props.slide.image1_alternativtext}
                addClass="shadow rounded ae-8" 
                dataAction="zoom"/>
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