import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide94 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-5-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-1"/>
          <form action="#" autocomplete="off" class="slides-form margin-bottom-3">
            <input type="email" class="rounded ae-2 fromLeft" name="email" placeholder="E-mail address"/>
            <button type="submit" class="button blue rounded ae-3 fromRight" name="submit">Try it Free</button>
          </form>
          <Text fields={this.props.slide} addClass="small ae-4"/>
        </div>
                
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide94;