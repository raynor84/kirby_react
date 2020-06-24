import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Heading from './fields/Heading';
import Img from './fields/Img';
class Slide99 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap padding-top-phablet-5">

        <div class="fix-12-12 ae-1">
          <div class="swiper-99">
            <div class="swiper-wrapper">
            {this.props.slide.list.map(function(fields, index) { 
            return (
              <a key={index} href={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} nofollow={fields.follow} target={fields.target} class="box-99 swiper-slide noText cursorGrab">
                <div class="thumbnail-99 text-white disableSelect">
                  <Img fields={fields} addClass="wide rounded" dataAction=""/>
                  <Heading fields={fields} addClass="title-slide-99" />
                  <Text fields={fields} addClass="more-99 smallest uppercase bold opacity-8"/>
                  <div class="blackout-99 rounded"/>
                </div>
              </a>
            );})}
            </div>
            
            <div class="swiper-pagination ae-3"/>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide99;