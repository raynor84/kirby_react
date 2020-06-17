import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide51 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-6-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
          <ul class="flex later equal">
            <li class="col-6-12">
              <div class="pad shadow fix-5-12 margin-bottom-tablet-3 ae-3">
                <Img fields={this.props.slide} addClass="round margin-bottom-2 ae-4" dataAction=""/>
                <h4 class="small margin-bottom-1 ae-5">Creativity</h4>
                <div class="ae-6"><p class="small opacity-8 margin-bottom-3 equalElement">Space and light and order. Those are the things that men.</p></div>
                <div class="button green rounded wide crop ae-7">Purchase</div>
              </div>
            </li>
            <li class="col-6-12">
              <div class="pad shadow fix-5-12 ae-4">
                <Img fields={this.props.slide} addClass="round margin-bottom-2 ae-5" dataAction=""/>
                <h4 class="small margin-bottom-1 ae-6">Layers</h4>
                <div class="ae-7"><p class="small opacity-8 margin-bottom-3 equalElement">Design is not making beauty, beauty emerges from selection.</p></div>
                <div class="button green rounded wide crop ae-8">Purchase</div>
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
export default Slide51;