import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import PopupButton from './fields/PopupButton';
class Slide63 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <ul class="flex left margin-top-4">
          {this.props.slide.list.map(function(fields, index) { 
                return (
            <li class="col-6-12 margin-bottom-1 ae-3">
              <Heading addClass="margin-top-1 margin-bottom-1" fields={fields} />
              <BlockText addClass="opacity-8" fields={fields} />
            </li>
                );
          })}
          </ul>
          <PopupButton fields={this.props.slide} addClass="margin-top-1 cropBottom" popupid="63-63"/>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide63;