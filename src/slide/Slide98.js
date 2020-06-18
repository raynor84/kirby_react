import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Img from './fields/Img';
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
              <a href="#asdf" class="box-98 swiper-slide noText">
                <div class="relative text-white disableSelect">
                  <Img fields={this.props.slide} addClass="wide rounded" dataAction=""/>
                  <Text fields={this.props.slide} addClass="smallest uppercase bold title-slide-98 opacity-8"/>
                  <h4 class="small subtitle-slide-98">Pictures in Which the Magic Lives</h4>
                  <div class="blackout-98"/>
                </div>
              </a>
              <a href="#asdf" class="box-98 swiper-slide noText">
                <div class="relative text-white disableSelect">
                  <Img fields={this.props.slide} addClass="wide rounded" dataAction=""/>
                  <p class="smallest uppercase bold title-slide-98 opacity-8">Gallery</p>
                  <h4 class="small subtitle-slide-98">20 Most Strange Paintings in the World</h4>
                  <div class="blackout-98"/>
                </div>
              </a>
              <a href="#asdf" class="box-98 swiper-slide noText">
                <div class="relative text-white disableSelect">
                  <Img fields={this.props.slide} addClass="wide rounded" dataAction=""/>
                  <p class="smallest uppercase bold title-slide-98 opacity-8">Exhibition</p>
                  <h4 class="small subtitle-slide-98">South Korean Artist: The Origin of Creativity</h4>
                  <div class="blackout-98"/>
                </div>
              </a>
              <a href="#asdf" class="box-98 swiper-slide noText">
                <div class="relative text-white disableSelect">
                  <Img fields={this.props.slide} addClass="wide rounded" dataAction=""/>
                  <p class="smallest uppercase bold title-slide-98 opacity-8">Display</p>
                  <h4 class="small subtitle-slide-98">Pictures in Which the Magic Lives</h4>
                  <div class="blackout-98"/>
                </div>
              </a>
              <a href="#asdf" class="box-98 swiper-slide noText">
                <div class="relative text-white disableSelect">
                  <Img fields={this.props.slide} addClass="wide rounded" dataAction=""/>
                  <p class="smallest uppercase bold title-slide-98 opacity-8">Gallery</p>
                  <h4 class="small subtitle-slide-98">20 Most Strange Paintings in the World</h4>
                  <div class="blackout-98"/>
                </div>
              </a>
              <a href="#asdf" class="box-98 swiper-slide noText">
                <div class="relative text-white disableSelect">
                  <Img fields={this.props.slide} addClass="wide rounded" dataAction=""/>
                  <p class="smallest uppercase bold title-slide-98 opacity-8">Exhibition</p>
                  <h4 class="small subtitle-slide-98">South Korean Artist: The Origin of Creativity</h4>
                  <div class="blackout-98"/>
                </div>
              </a>
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