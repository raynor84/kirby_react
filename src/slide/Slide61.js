import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
class Slide61 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-12-12">
          <ul class="flex fixedSpaces verticalCenter">
            <li class="col-6-12 left ae-1">
              <Img fields={this.props.slide} addClass="macbook-61 margin-bottom-tablet-3" dataAction="zoom"/>
            </li>
            <li class="col-6-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2"/>
              <Text fields={this.props.slide} addClass="large margin-bottom-3 ae-3"/>
              <ul class="flex flex-61 later">
              {this.props.slide.list.map(function(fields, index) { 
                let ae = index+4;
                return (
                <li class={"col-6-12 ae-"+ae}>
                  <Img fields={fields} addClass="margin-top-1 margin-bottom-1"  />
                  <i class="material-icons">{fields.material_icon}</i>
                  <Heading addClass="margin-bottom-1" fields={fields}/>
                  <BlockText fields={fields} addClass="small opacity-8" />
                </li>
                )
              })}
              </ul>
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
export default Slide61;