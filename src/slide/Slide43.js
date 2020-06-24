import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide43 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <Heading fields={this.props.slide} addClass="ae-1"/>
        <div class="fix-4-12 margin-top-3">
          <div class="pad padding-top-3 shadow selected ae-3 left">
            <form class="slides-form wide" action="#" autocomplete="on">
              <div class="label ae-3 cropTop"><label class="cropTop opacity-5" for="email43">Email address</label></div>
              <input class="rounded wide ae-4" id="email43" type="email" name="email" placeholder="Email address" required=""/>
              <div class="label ae-5 margin-top-2"><label class="opacity-5" for="password43">Password</label></div>
              <input class="rounded wide ae-6" id="password43" type="password" name="password" placeholder="Password" required=""/>
              <div class="ae-7">
                <Text fields={this.props.slide} addClass="remind-43 small"/>
              </div>
              <button type="submit" class="button rounded green wide ae-9 cropBottom" name="button">Sign in</button>
            </form>
          </div>
          <p class="margin-top-3 small center ae-10"><span class="opacity-8">Don&#x2019;t have an account?</span> <a href="#" class="opacity-8 bold">Create Account</a></p>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide43;