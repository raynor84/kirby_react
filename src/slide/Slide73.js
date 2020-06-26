import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
import { Link } from "react-router-dom";

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
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index + 3;
            return (
            <li class={"col-4-12 ae-"+ae}>
              <Link to={typeof fields.url[0] === "object" ? fields.url[0].link : undefined}  class="cell-73 padding-3 rounded equalElement" nofollow={fields.follow} target={fields.target}>
                <Heading addClass="margin-bottom-1" fields={fields} />
                <BlockText addClass="small cropBottom opacity-8" fields={fields} />
              </Link>
            </li>
            ); })}
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