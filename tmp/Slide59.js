import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide59 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <div class="pad padding-4 padding-phablet-3 padding-phone-2 shadow left ae-3 pad-59 margin-top-4">
            <h3 class="smallest margin-bottom-2 ae-3">Purchases</h3>
            <p class="ae-2"><span class="opacity-8">Please read these Terms and Conditions (&#x201C;Terms&#x201D;, &#x201C;Terms and Conditions&#x201D;) carefully before using the http://designmodo.com website (the &#x201C;Service&#x201D;) operated by Designmodo Inc. (&#x201C;us&#x201D;, &#x201C;we&#x201D;, or &#x201C;our&#x201D;). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the&#xA0;Service.</span></p>
            <h3 class="smallest margin-top-3 margin-bottom-2 ae-3">Communications</h3>
            <p class="ae-4 cropBottom"><span class="opacity-8">By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we&#xA0;send.</span></p>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide59;