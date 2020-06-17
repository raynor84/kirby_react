import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Heading2 from './fields/Heading2';
import Text from './fields/Text';
import Text2 from './fields/Text2';
import Img from './fields/Img';
class Slide27 extends React.Component {

	render() {

    let dots = [];
    for(let i=0; i<this.props.slide.gallery.length; i++) {
      if(i===0) {
        dots.push(<li class="dot selected"></li>);
      } else {
        dots.push(<li class="dot"></li>);
      }
    }
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-11-12">
          <ul class="flex verticalCenter">
            <li class="col-5-12 cell-27">
              <div class="fix-4-12">
                <ul class="slider clickable ae-1 fromAbove" data-slider-id="27-27">
                {this.props.slide.gallery.map(function(image, index) {
                return <li class={index=== 0 ? "selected": ""}><Img key={index} imageField={image} addClass="" dataAction=""/></li>
                })}
                </ul>
                <ul class="controller dots margin-top-3 ae-2 fromCenter" data-slider-id="27-27">
                  {dots}
                </ul>
              </div>
            </li>
            <li class="col-7-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2 fromRight"/>
              <div class="ae-3 fromRight">
                <Text fields={this.props.slide} addClass="large"/>
              </div>
              <div class="relative">
                <Img fields={this.props.slide} addClass="round app-27 ae-3 fromCenter" dataAction=""/>
                <div class="text-26">
                <Heading2 fields={this.props.slide} addClass="fromRight ae-3"/>
                  <div class="ae-5 fromRight">
                    <Text2 fields={this.props.slide} addClass="small opacity-8" />  
                  </div>
                </div>
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
export default Slide27;