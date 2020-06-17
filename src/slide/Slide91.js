import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide91 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12 toCenter">
          <div class="fix-8-12">
            <Text fields={this.props.slide} addClass="large margin-bottom-2 ae-1"/>
            <Heading fields={this.props.slide} addClass="margin-bottom-4 ae-2 fromAbove"/>
            <ButtonA fields={this.props.slide}/>
          </div>
          <ul class="flex fixedSpaces left margin-top-10">
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-4 fromLeft">
             <h4 class="smaller margin-bottom-1">Inspiration</h4>
             <p class="small opacity-8">We live in a society where everybody feels shameless and guilty.</p>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-5 fromLeft">
             <h4 class="smaller margin-bottom-1">Creativity</h4>
             <p class="small opacity-8">Hey there! You don&#x2019;t have to be &#x201C;a creative&#x201D; to be creative.</p>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-6 fromLeft">
             <h4 class="smaller margin-bottom-1">Fashion</h4>
             <p class="small opacity-8">There is no such thing as simple. Simple is actually hard to achieve.</p>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1 ae-7 fromLeft">
             <h4 class="smaller margin-bottom-1">Photography</h4>
             <p class="small opacity-8">Design is a language that makes what was once impossible possible.</p>
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
export default Slide91;