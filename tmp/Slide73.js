import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide73 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <ul class="flex reverse">
            <li class="col-6-12 left box-73">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2"/>
              <Text fields={this.props.slide} addClass="large ae-3"/>
            </li>
            <li class="col-6-12 left ae-1 fromAbove">
              <Img fields={this.props.slide} addClass="image-73 margin-bottom-tablet-4" dataAction="zoom"/>
            </li>
          </ul>
        </div>  

        <div class="fix-12-12">
          <ul class="flex fixedSpaces later equal flex-73 align-left margin-top-6 margin-top-tablet-0">
            <li class="col-4-12 ae-3">
              <a href="#" class="cell-73 padding-3 rounded equalElement">
                <h4 class="smaller margin-bottom-1">HQ Photos</h4>
                <p class="small cropBottom opacity-8">Quickly swipe messages to your archive or trash. <span class="nobr text-blue">Learn more &#x2192;</span></p>
              </a>
            </li>
            <li class="col-4-12 ae-4">
              <a href="#" class="cell-73 padding-3 rounded equalElement">
                <h4 class="smaller margin-bottom-1">Useful Components</h4>
                <p class="small cropBottom opacity-8">Scan entire conversations in a chat-like view. <span class="nobr text-blue">Learn more &#x2192;</span></p>
              </a>
            </li>
            <li class="col-4-12 ae-6">
              <a href="#" class="cell-73 padding-3 rounded equalElement last">
                <h4 class="smaller margin-bottom-1">Best Music</h4>
                <p class="small cropBottom opacity-8">Unforgettable feelings through a quality music. <span class="nobr text-blue">Learn more &#x2192;</span></p>
              </a>
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
export default Slide73;