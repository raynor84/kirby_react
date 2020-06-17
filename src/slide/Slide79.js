import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide79 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass=""/>
          
          <div class="ae-3 author-79 left margin-top-4">
            <Img fields={this.props.slide} addClass="avatar-79 round" dataAction=""/>
            <h4 class="smaller margin-bottom-1">Paul Rand</h4>
            <Text fields={this.props.slide} addClass="small opacity-8"/>
          </div> 
        </div>   
          
        <div class="fix-10-12">
          <ul class="flex flex-79 margin-top-6 later left">
            <li class="col-6-12 ae-4">
              <i class="material-icons">near_me</i>
              <h4 class="smaller margin-bottom-1">Location</h4>
              <p class="small opacity-8">The best stories of the week, delivered right to your inbox. No spam, we promise.</p>
            </li>
            <li class="col-6-12 ae-5">
              <i class="material-icons">layers</i>
              <h4 class="smaller margin-bottom-1">Layers</h4>
              <p class="small opacity-8">Less time shopping means more time Doing Things, so we created Slides Framework. It&#x2019;s built to impress!</p>
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
export default Slide79;