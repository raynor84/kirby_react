import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide41 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-7-12 center">
          <Text fields={this.props.slide} addClass="largest light ae-1"/>
          <div class="fix-4-12 margin-top-4">
            <a href="#" class="author block">
              <Img fields={this.props.slide} addClass="round ae-2 fromCenter margin-bottom-1" dataAction=""/>
              <h4 class="smaller margin-bottom-1 ae-3">Frank Gehry</h4>
              <p class="ae-4"><span class="opacity-8">Canadian architect<br/>Gehry Partners</span></p>
            </a>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide41;