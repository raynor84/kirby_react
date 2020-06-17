import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide30 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 left">
          <div class="fix-8-12 toLeft">
            <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
            <Text fields={this.props.slide} addClass="large margin-bottom-1 ae-2 toLeft"/>
          </div>

          <ul class="flex margin-top-4">
            <li class="col-3-12 margin-bottom-1 left ae-3">
              <h4 class="smallest">Meet Quick</h4>
              <p class="small opacity-8">I think it's really important to design things with a kind of personality.</p>
            </li>
            <li class="col-3-12 margin-bottom-1 left ae-4">
             <h4 class="smallest">Better Interface</h4>
              <p class="small opacity-8">Designers are very fickle. I never wanted to be a victim of that.</p>
            </li>
            <li class="col-3-12 margin-bottom-1 left ae-5">
             <h4 class="smallest">Fast Connection</h4>
              <p class="small opacity-8">The artist is a collector of things imaginary or real.</p>
            </li>
            <li class="col-3-12 margin-bottom-1 left ae-6">
              <h4 class="smallest">Listen Your Mind</h4>
              <p class="small opacity-8">The details are the very source of expression in architecture.</p>
            </li>
            <li class="col-3-12 margin-bottom-1 left ae-7">
             <h4 class="smallest">Fast Connection</h4>
              <p class="small opacity-8">The artist is a collector of things imaginary or real.</p>
            </li>
            <li class="col-3-12 margin-bottom-1 left ae-8">
              <h4 class="smallest">Listen Your Mind</h4>
              <p class="small opacity-8">The details are the very source of expression in architecture.</p>
            </li>
            <li class="col-3-12 margin-bottom-1 left ae-9">
              <h4 class="smallest">Meet Quick</h4>
              <p class="small opacity-8">I think it's really important to design things with a kind of personality.</p>
            </li>
            <li class="col-3-12 margin-bottom-1 left ae-10">
             <h4 class="smallest">Better Interface</h4>
              <p class="small opacity-8">Designers are very fickle. I never wanted to be a victim of that.</p>
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
export default Slide30;