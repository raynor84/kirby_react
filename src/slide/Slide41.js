import React from 'react';
import Section from './Section';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
var parse = require('html-react-parser');

class Slide41 extends React.Component {

	render() {
    console.log(this.props.slide.url[0]);
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-7-12 center">
          <BlockText fields={this.props.slide} addClass="largest light ae-1"/>
          <div class="fix-4-12 margin-top-4">
            <a href={this.props.slide.url[0]!==undefined ? this.props.slide.url[0].link: ""} nofollow={this.props.slide.follow} target={this.props.slide.target} class="author block">
              <Img fields={this.props.slide} addClass="round ae-2 fromCenter margin-bottom-1" dataAction=""/>
              <h4 class="smaller margin-bottom-1 ae-3">{this.props.slide.author}</h4>
              <p class="ae-4"><span class="opacity-8">{parse(this.props.slide.description)}</span></p>
            </a>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide41;