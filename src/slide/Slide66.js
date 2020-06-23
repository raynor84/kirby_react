import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
class Slide66 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-10-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="cropBottom large ae-2"/>
        </div>
        <div class="fix-10-12">
          <ul class="flex later equal left">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index +3;
                return (
            <li class="col-4-12 margin-top-5">
              <a href={typeof fields.url[0]==="object" ? fields.url[0].link: undefined} class="button empty rounded shadow margin-bottom-1 ae-3 done" nofollow={fields.follow} target={fields.target}>
                  <Img fields={fields} addClass="wide" />
              </a>  
              <Heading fields={fields} addClass={"margin-top-1 ae-"+(ae+1)} />
              <div class="margin-top-1 ae-5"><BlockText addClass="small opacity-8" fields={fields} /></div>
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
export default Slide66;