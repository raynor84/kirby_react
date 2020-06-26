import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Img from './fields/Img';
import Text from './fields/Text';
import { Link } from "react-router-dom";

import BlockText from './fields/BlockText';
class Slide64 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-10-12">
          <div class="fix-8-12 toCenter header-64">
            <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
            <Text fields={this.props.slide} addClass="larger light margin-bottom-4 ae-2"/>
          </div>
          <ul class="flex fixedSpaces later equal left flex-64">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index +3;
                return (
            <li class={"col-4-12 ae-"+ae}>
              <Link to={typeof fields.url[0]==="object" ? fields.url[0].link: undefined} class="cell-64 rounded equalElement" nofollow={fields.follow} target={fields.target}>
                <Img fields={fields} addClass="margin-top-1 margin-bottom-1" />
                <i class="material-icons">{fields.material_icon}</i>
                <Heading fields={fields} addClass="margin-bottom-1" />
                <BlockText addClass="opacity-8" fields={fields} />
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
export default Slide64;