import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide58 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 left">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>

          <h2 class="smallest margin-top-4 margin-bottom-2 ae-3">Communications</h2>
          <p class="ae-4"><span class="opacity-8">By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</span></p>

          <h2 class="smallest margin-top-4 margin-bottom-2 ae-5">Purchases</h2>
          <p class="ae-6"><span class="opacity-8">If you wish to purchase any product or service made available through the Service (&#x201C;Purchase&#x201D;), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</span></p>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide58;