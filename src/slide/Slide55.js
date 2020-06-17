import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide55 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
        <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
        <div class="form-55 fix-5-12">
          <div class="pad padding-top-2 shadow left selected ae-3">
            <form action="ajax-email.php" id="contact-form" method="post" class="slides-form wide" data-ajax-form="true">
              <ul class="flex noSpaces">
                <li class="col-6-12 form-55-input-1">
                  <div class="label ae-5"><label class="left opacity-5" for="name55">Your name</label></div>
                  <input class="rounded wide ae-6" id="name55" type="name" name="name" placeholder="Name" required=""/>
                </li>
                <li class="col-6-12 form-55-input-2">
                  <div class="label ae-5"><label class="left opacity-5" for="email55">Email address</label></div>
                  <input class="rounded wide ae-6" id="email55" type="email" name="email" placeholder="Email" required=""/>
                </li>
              </ul>
              <div class="label ae-8"><label class="opacity-5" for="message55">Message</label></div>
              <textarea class="rounded left wide ae-9" id="message55" type="text" name="message" placeholder="Message" required=""/>
              <button type="submit" class="button wide blue rounded ae-10 cropBottom margin-top-2" data-success-text="Done!" data-success-class="message-sent" name="button">Send message</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide55;