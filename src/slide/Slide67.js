import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
import { Link } from "react-router-dom";

class Slide67 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-12-12 margin-top-4">  
          <ul class="flex later fixedSpaces equal left">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index +3;
                return (
            <li class={"col-4-12  fromCenter ae-"+ae}>
              <Link to={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} class="box-67" nofollow={fields.follow} target={fields.target}>
                <div class="thumbnail-67 rounded">
                  <Img fields={fields} addClass="wide" dataAction=""/>
                </div>
                <div class="name-67 equalElement table wide">
                  <div class="cell">
                    <BlockText fields={fields} addClass="smallest bold uppercase margin-bottom-1 opacity-4" />
                    <Heading addClass="cropBottom" fields={fields} />
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
export default Slide67;