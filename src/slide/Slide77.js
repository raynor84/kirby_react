import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
class Slide77 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
        </div>
        <div class="fix-12-12">
          <ul class="flex flex-77 fixedSpaces equal equalMobile align-left">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index + 3;
            return (
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1">
              <a href={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} class={"box-77 ae-"+ae} nofollow={fields.follow} target={fields.target}>
                <div class="thumbnail-77">
                  <Img fields={fields} addClass="wide" dataAction=""/>
                </div>
                <div class="details-77 padding-2 equalElement">
                  <div class="table wide">
                    <div class="cell">
                      <Heading addClass="margin-bottom-1" fields={fields} />
                      <BlockText addClass="small opacity-8 cropBottom" fields={fields} />
                      <div class="author-77 relative margin-top-2 padding-top-2 padding-left-4">
                        <Img 
                          imageField={fields.author_image[0]} 
                          addClass="avatar-77 round" 
                          dataAction=""
                          imageWidth={fields.author_image_width}
                          imageHeight={fields.author_image_height} 
                          imageAlt={fields.author_image_alternativtext}
                          />
                        <p class="small cropBottom">{fields.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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
export default Slide77;