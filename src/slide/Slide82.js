import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Logo from './fields/Logo';
import ButtonA from './fields/ButtonA';
import Img from './fields/Img';
class Slide82 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-7-12 noSelect">
          <div class="relative">
            <div class="leftControl-82 ae-5 fromLeft" data-slider-id="82-82" data-slider-action="prev"><Logo fields={this.props.slide}/></div>
            <div class="rightControl-82 ae-5 fromRight" data-slider-id="82-82" data-slider-action="next"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-right"/></svg></div>
            <ul class="slider clickable animated margin-bottom-2 ae-1 fadeIn" data-slider-id="82-82">
              <li class="selected"><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
              <li><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
              <li><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
              <li><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
            </ul>
            <ul class="controller dots ae-3 fromBottom" data-slider-id="82-82">
              <li class="dot selected"/>
              <li class="dot"/>
              <li class="dot"/>
              <li class="dot"/>
            </ul>
          </div>
          <div class="fix-5-12 margin-top-2">
            <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-5 fronLeft"/>
            <div class="ae-6 fromrRight">
              <Text fields={this.props.slide} addClass="large margin-bottom-3 opacity-8"/>
              <ButtonA fields={this.props.slide}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide82;