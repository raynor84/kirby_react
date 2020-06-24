import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Heading from './fields/Heading';
import Img from './fields/Img';
import "../css/swiper.min.css";

class Slide98 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 ae-1">
          <div class="swiper-98">
            <div class="swiper-wrapper">
            {this.props.slide.list.map(function(fields, index) { 
            
            return (
              <a key={index} href={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} nofollow={fields.follow} target={fields.target} class="box-98 swiper-slide noText">
                <div class="relative text-white disableSelect">
                  <Img fields={fields} addClass="wide rounded" dataAction=""/>
                  <Text fields={fields} addClass="smallest uppercase bold title-slide-98 opacity-8"/>
                  <Heading addClass="subtitle-slide-98" fields={fields}/>
                  <div class="blackout-98"/>
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
export default Slide98;