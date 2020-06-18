import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
class Slide32 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-12-12">
          <ul class="flex reverse">
            <li class="col-6-12 left cell-32">
              <Heading fields={this.props.slide} addClass="margin-bottom-2"/>
              <Text fields={this.props.slide} addClass="ae-3 larger light margin-bottom-3"/>
              <ul class="items-32">
              {this.props.slide.list.map(function(item, index){
              let ae = index +4;

              return (<li key={item._uid} class={"fix-4-12 toLeft margin-bottom-3 ae-"+ae}>
                <Heading key={index} fields={item} addClass="margin-bottom-1" />
                <BlockText  key={index+"A"} addClass="opacity-8" fields={item} />
              </li>);
            })
          }

              </ul>
            </li>
            <li class="col-6-12 left ae-1 fromRight">
              <Img fields={this.props.slide} addClass="ipad-32 margin-bottom-tablet-4" dataAction="zoom"/>
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
export default Slide32;