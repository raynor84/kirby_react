import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide42 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <Heading fields={this.props.slide} addClass=""/>
        <div class="form-42 margin-top-3 center">
          <div class="pad shadow selected left ae-3">
            <form class="slides-form wide" action="#" autocomplete="off">
              <div class="label ae-3 cropTop"><label class="left cropTop opacity-5" for="email42">Start with email address</label></div>
              <input class="rounded wide ae-4" id="email42" type="email" name="email" placeholder="Email address" required=""/>
              <ul class="flex noSpaces margin-top-1">
                <li class="col-6-12 form-42-input-1">
                  <div class="label ae-5"><label class="left opacity-5" for="password42">Create Password</label></div>
                  <input class="rounded wide ae-6" id="password42" type="password" name="password" placeholder="Password" required=""/>
                </li>
                <li class="col-6-12 form-42-input-2">
                  <div class="label ae-5"><label class="left opacity-5" for="password42confirm">Confirm Password</label></div>
                  <input class="rounded wide ae-6" id="password42confirm" type="password" name="password" placeholder="Repeat" required=""/>
                </li>
              </ul>
              <Text fields={this.props.slide} addClass="small center margin-top-2 ae-7"/>
              <button type="submit" class="button green rounded wide ae-8" name="button">Create Account</button>

            </form>
          </div>
          <p class="small margin-top-3 ae-10"><span class="opacity-8">Already have an invite code?</span> <a href="#" class="bold opacity-8">Sign In</a></p>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide42;