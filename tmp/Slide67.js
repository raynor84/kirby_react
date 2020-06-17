import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide67 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-12-12 margin-top-4">  
          <ul class="flex later fixedSpaces equal left">
            <li class="col-4-12 ae-3 fromCenter">
              <a href="#" class="box-67">
                <div class="thumbnail-67 rounded">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="name-67 equalElement table wide">
                  <div class="cell">
                    <p class="smallest bold uppercase margin-bottom-1 opacity-4">3 minutes &#x2022; LEARN MORE</p>
                    <h4 class="small cropBottom">Artisan Rye Bread</h4>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-4-12 ae-4 fromCenter">
              <a href="#" class="box-67">
                <div class="thumbnail-67 rounded">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="name-67 equalElement table wide">
                  <div class="cell">
                    <p class="smallest bold uppercase margin-bottom-1 opacity-4">14 minutes &#x2022; LEARN MORE</p>
                    <h4 class="small cropBottom">Blueberry Muffin</h4>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-4-12 ae-5 fromCenter">
              <a href="#" class="box-67">
                <div class="thumbnail-67 rounded">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="name-67 equalElement table wide">
                  <div class="cell">
                    <p class="smallest bold uppercase margin-bottom-1 opacity-4">12 minutes &#x2022; LEARN MORE</p>
                    <h4 class="small cropBottom">Chopped Parsley</h4>
                  </div>
                </div>
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
export default Slide67;