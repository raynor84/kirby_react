import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import ButtonC from './fields/ButtonC';
import Img from './fields/Img';
class Slide70 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">  
          <ul class="flex equal later fromCenter">
            <li class="col-4-12 margin-bottom-tablet-2">
              <div class="pad shadowHover padding-0 ae-1">
                <div class="thumbnail-70">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="info-70">
                  <Text fields={this.props.slide} addClass="smaller bold uppercase opacity-4 margin-bottom-1 margin-top-0"/>
                  <h4 class="small margin-bottom-1">Envelope</h4>
                  <p class="small opacity-8 margin-bottom-2 equalElement">Art is making something out of nothing and selling&#xA0;it.</p>
                  <ButtonA fields={this.props.slide}/>
                </div>
              </div>
            </li>
            <li class="col-4-12 margin-bottom-tablet-2">
              <div class="pad shadowHover padding-0 ae-2">
                <div class="thumbnail-70">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="info-70">
                  <p class="smaller bold uppercase opacity-4 margin-bottom-1 margin-top-0">Technology</p>
                  <h4 class="small margin-bottom-1">Smart Watch</h4>
                  <p class="small opacity-8 margin-bottom-2 equalElement">Design is the effort to impose a meaningful&#xA0;order.</p>
                  <ButtonB fields={this.props.slide}/>
                </div>
              </div>
            </li>
            <li class="col-4-12">
              <div class="pad shadowHover padding-0 ae-3">
                <div class="thumbnail-70">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="info-70">
                  <p class="smaller bold uppercase opacity-4 margin-bottom-1 margin-top-0">Music</p>
                  <h4 class="small margin-bottom-1">Headphones</h4>
                  <p class="small opacity-8 margin-bottom-2 equalElement">It&#x2019;s all fun and games until someone breaks a&#xA0;link.</p>
                  <ButtonC fields={this.props.slide}/>
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
export default Slide70;