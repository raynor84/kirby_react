import React from 'react';
import Section from './Section';
import BlockText from './fields/BlockText';
import ButtonA from './fields/ButtonA';
import Heading from './fields/Heading';
import Img from './fields/Img';
import Subtitle from './fields/Subtitle';
class Slide70 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">  
          <ul class="flex equal later fromCenter">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index +1;
            return (
            <li class="col-4-12 margin-bottom-tablet-2">
              <div class={"pad shadowHover padding-0 ae-"+ae}>
                <div class="thumbnail-70">
                  <Img fields={fields} addClass="wide" dataAction=""/>
                </div>
                <div class="info-70">
                  <Subtitle fields={fields} addClass="smaller bold uppercase opacity-4 margin-bottom-1 margin-top-0"/>
                  <Heading addClass="margin-bottom-1" fields={fields} />
                  <BlockText addClass="small opacity-8 margin-bottom-2 equalElement" fields={fields} />
                  <ButtonA fields={fields}/>
                </div>
              </div>
            </li>);
          })}
          </ul>
        </div>
        
      </div> 
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide70;