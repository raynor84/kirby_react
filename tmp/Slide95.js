import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
class Slide95 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        <Heading fields={this.props.slide} addClass="margin-bottom-2"/>
        <Text fields={this.props.slide} addClass="larger light ae-2 margin-bottom-4"/>

        <div class="fix-5-12">
          <form action="#" autocomplete="off" class="slides-form margin-bottom-3">
            <input type="email" class="rounded ae-3" name="email" placeholder="E-mail address"/>
            <button type="submit" class="button blue rounded ae-4" name="submit">Try it Free</button>
          </form>
        </div>

        <ButtonA fields={this.props.slide}/><ButtonB fields={this.props.slide}/>
      </div>
      
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide95;