import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide74 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-12-12 margin-top-4">  
          <ul class="flex flex-74 fixedSpaces later equal">
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-3 fromCenter">
              <a href="#" class="box-74">
                <div class="thumbnail-74">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="name-74 equalElement table wide">
                  <div class="cell left top">
                    <h4 class="smaller margin-bottom-1">Inspiration</h4>
                    <p class="small opacity-8 cropBottom">Creativity is allowing yourself to make&#xA0;mistakes.</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-4 fromCenter">
              <a href="#" class="box-74">
                <div class="thumbnail-74">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="name-74 equalElement table wide">
                  <div class="cell left top">
                    <h4 class="smaller margin-bottom-1">The Moment</h4>
                    <p class="small opacity-8 cropBottom">A person tends to critique a design in one of several&#xA0;ways.</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-5 fromCenter">
              <a href="#" class="box-74">
                <div class="thumbnail-74">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="name-74 equalElement table wide">
                  <div class="cell left top">
                    <h4 class="smaller margin-bottom-1">Journey</h4>
                    <p class="small opacity-8 cropBottom">More designers should share space, share&#xA0;resources.</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-5 fromCenter">
              <a href="#" class="box-74">
                <div class="thumbnail-74">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="name-74 equalElement table wide">
                  <div class="cell left top">
                    <h4 class="smaller margin-bottom-1">Colorado</h4>
                    <p class="small opacity-8 cropBottom">An essential aspect of creativity is not being afraid to&#xA0;fail.</p>
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
export default Slide74;