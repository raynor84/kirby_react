import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
import BlockText from './fields/BlockText';

class Slide90 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12 toCenter">
          <Text field={this.props.slide.subtitle} addClass="larger margin-bottom-1 ae-1"/>
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text addClass="large light ae-2" fields={this.props.slide} />
        </div>
        <div class="fix-12-12 margin-top-4">
          <ul class="flex fixedSpaces later left">
          {this.props.slide.list.map(function(fields, index) {
                let ae = index +4;
                return (
            <li class="col-3-12 col-tablet-1-2 col-phone-1-1">
              <a href={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} nofollow={fields.follow} target={fields.target} class={"button rounded empty margin-bottom-2 ae-"+ae}>
                <Img addClass="wide" fields={fields} />
              </a>
              <Heading addClass={"margin-bottom-1 ae-"+ae} fields={fields} />
              
              <div class={"ae-"+(ae+1)}><BlockText fields={fields} addClass="small opacity-8" /></div>
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
export default Slide90;