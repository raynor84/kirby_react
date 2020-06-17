import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import PopupButton from './fields/PopupButton';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import ButtonC from './fields/ButtonC';
class Slide90 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12 toCenter">
          <Text fields={this.props.slide} addClass="larger margin-bottom-1 ae-1"/>
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <p class="large light ae-2"><span class="opacity-8">However, I&#x2019;ve always been more concerned with users. Programmers do their work but once, while users are saddled with it ever thereafter.</span></p>
        </div>
        <div class="fix-12-12 margin-top-4">
          <ul class="flex fixedSpaces later left">
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1">
              <PopupButton fields={this.props.slide} popupid="90-90"/>
              <h4 class="smaller margin-bottom-1 ae-4">Inspiration</h4>
              <div class="ae-5"><p class="small opacity-8">We live in a society where everybody feels shameless and guilty.</p></div>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1">
              <ButtonA fields={this.props.slide}/>
              <h4 class="smaller margin-bottom-1 ae-5">Creativity</h4>
              <div class="ae-6"><p class="small opacity-8">Hey there! You don&#x2019;t have to be &#x201C;a creative&#x201D; to be creative.</p></div>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1">
              <ButtonB fields={this.props.slide}/>
              <h4 class="smaller margin-bottom-1 ae-6">Fashion</h4>
              <div class="ae-7"><p class="small opacity-8">There is no such thing as simple. Simple is actually hard to achieve.</p></div>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1">
              <ButtonC fields={this.props.slide}/>
              <h4 class="smaller margin-bottom-1 ae-7">Photography</h4>
              <div class="ae-8"><p class="small opacity-8">Design is a language that makes what was once impossible possible.</p></div>
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
export default Slide90;