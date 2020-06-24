import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import ButtonA from './fields/ButtonA';
class Slide100 extends React.Component {

	render() {
    let image = typeof this.props.slide.image[0] ==="object" ? this.props.slide.image[0].url : undefined;
    console.log(image);
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap padding-top-phablet-5">

        <div class="fix-12-12">
          <ul class="flex later">
            <li class="col-7-12 left ae-1 flex-slide-100">
              <div class="wrap-img-100" style={{"backgroundImage": "url("+image+")"}}>
                <div class="blackout rounded"></div>
                <div class="wrap-text-100 wrap-text-100">
                  <Heading fields={this.props.slide} addClass="margin-bottom-1 ae-2"/>
                  <Text fields={this.props.slide} addClass="large ae-3 margin-bottom-2"/>
                  <ButtonA fields={this.props.slide} addClass="ae-4 crop" />
                </div>
              </div>
            </li>
            <li class="col-5-12 left padding-left-3 padding-left-phablet-0 margin-top-phablet-3">
              <h3 class="ae-2 smallest margin-bottom-3">{this.props.slide.posts_title}</h3>
              {this.props.slide.list.map(function(fields, index) { 
              return (  
              <a key={index} href={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} nofollow={fields.follow} target={fields.target} class="item-100 rounded margin-bottom-2">
                <Heading fields={fields} addClass="margin-bottom-1" />
                <BlockText fields={fields} addClass="smallest uppercase bold opacity-8 cropBottom" />
              </a>
              ); })}
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
export default Slide100;