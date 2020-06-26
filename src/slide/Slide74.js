import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
import { Link } from "react-router-dom";

class Slide74 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-12-12 margin-top-4">  
          <ul class="flex flex-74 fixedSpaces later equal">

          {this.props.slide.list.map(function(fields, index) { 
            let ae = index + 3;
            return (
            <li class={"col-3-12 col-tablet-1-2 col-phablet-1-1 fromCenter ae-"+ae}>
              <Link to={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} class="box-74" nofollow={fields.follow} target={fields.target}>
                <div class="thumbnail-74">
                  <Img fields={fields} addClass="wide" dataAction=""/>
                </div>
                <div class="name-74 equalElement table wide">
                  <div class="cell left top">
                  <Heading addClass="margin-bottom-1" fields={fields} />
                  <BlockText addClass="small cropBottom opacity-8" fields={fields} />
                  </div>
                </div>
              </Link>
            </li>
            );
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
export default Slide74;