import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide53 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
        <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
        <div class="fix-6-12">
          <ul class="flex later equal">
            <li class="col-6-12">
              <div class="fix-3-12 margin-bottom-3">
                <div class="pad shadow ae-3">
                  <div class="price ae-4"><span class="currency">$</span>69</div>
                  <h4 class="small margin-bottom-1 ae-5">Creativity</h4>
                  <div class="ae-6"><p class="small opacity-8 margin-bottom-3 equalElement">Space and light and order. Those are the things that&#xA0;men.</p></div>
                  <div class="button green rounded wide crop ae-7">Purchase</div>
                </div>
              </div>
            </li>
            <li class="col-6-12">
              <div class="fix-3-12">
                <div class="pad shadow ae-4">
                  <div class="price ae-5"><span class="currency">$</span>89</div>
                  <h4 class="small margin-bottom-1 ae-6">Layers</h4>
                  <div class="ae-7"><p class="small opacity-8 margin-bottom-3 equalElement">Design is not making beauty, beauty emerges from&#xA0;selection.</p></div>
                  <div class="button green rounded wide crop ae-8">Purchase</div>
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
export default Slide53;