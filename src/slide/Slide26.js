import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide26 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-11-12">
          <ul class="flex reverse verticalCenter">
            <li class="col-7-12 left cell-26">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
              <div class="ae-2 fromLeft">
                <Text fields={this.props.slide} addClass="large opacity-8"/>
              </div>
              <div class="relative">
                <Img fields={this.props.slide} addClass="round app-26 ae-3 fromCenter" dataAction=""/>
                <div class="text-26">
                  <h4 class="small ae-3 fromRight">Ember for Apple Watch</h4>
                  <div class="ae-5 fromRight">
                    <p class="small opacity-8">People don&#x2019;t use a product<br/>because of the great&#xA0;design.</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="col-5-12">
              <div class="fix-4-12 center">
                <ul class="slider clickable ae-1 fromAbove" data-slider-id="26-5">
                  <li class="selected"><Img fields={this.props.slide} addClass="" dataAction=""/></li>
                  <li><Img fields={this.props.slide} addClass="" dataAction=""/></li>
                  <li><Img fields={this.props.slide} addClass="" dataAction=""/></li>
                  <li><Img fields={this.props.slide} addClass="" dataAction=""/></li>
                </ul>
                <ul class="controller dots ae-3 fromCenter margin-top-3" data-slider-id="26-5">
                  <li class="dot selected"/>
                  <li class="dot"/>
                  <li class="dot"/>
                  <li class="dot"/>
                </ul>
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
export default Slide26;