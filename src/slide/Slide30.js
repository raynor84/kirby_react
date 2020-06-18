import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Text2 from './fields/Text2';

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
            {this.props.slide.list.map(function(item, index){
              let ae = index +3;

              return (<li key={item._uid} class={"col-3-12 margin-bottom-1 left ae-"+ae}>
                <Heading key={index} fields={item} />
                <Text  key={index+"A"} addClass="small " fields={item} />
              </li>);
            })
          }
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