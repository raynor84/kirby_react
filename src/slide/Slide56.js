import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import { Link } from "react-router-dom";

class Slide56 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light margin-bottom-4 ae-2"/>
          <ul class="flex equal fixedSpaces margin-top-3">
          {this.props.slide.list.map(function(fields, index) {
            let ae=parseFloat(index)+parseFloat(3);
            if(fields._key==="list") {
              return (
                <li class={"col-4-12 ae-"+ae}>
                  <div class="fix-3-12 equalElement">
                    <Heading fields={fields} addClass="bold uppercase opacity-4 margin-top-3 margin-bottom-2 ae-1" />
                    <p><Link class="opacity-8" to={typeof fields.url[0] ==="object" && fields.url[0] !== undefined ? fields.url[0].link:""}>{fields.text}</Link></p>
                  </div>
                </li>
                );
              } else {
                return (
                  <li class={"col-4-12 ae-"+ae}>
                  <div class="fix-3-12 equalElement">

                    <Heading fields={fields} addClass="bold uppercase opacity-4 margin-top-3 margin-bottom-2 ae-1" />
                    <ul class="social-circles">
                      {fields.facebook_url && <li><a class="social-facebook" href={fields.facebook_url}><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#facebook2"></use></svg></a></li>}
                      {fields.whatsup_url && <li><a class="social-whatsapp" href={fields.whatsup_url}><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#whatsapp"/></svg></a></li>}
                      {fields.youtube_url && <li><a class="social-youtube" href={fields.youtube_url}><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#youtube"/></svg></a></li> }
                      {fields.linkedin_url &&  <li><a class="social-linkedin" href={fields.linkedin_url}><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#linkedin"/></svg></a></li>}
                      {fields.twitter_url && <li><a class="social-twitter" href={fields.twitter_url}><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter"/></svg></a></li>}
                    </ul>
                  </div>
                </li>
    
                );
              }
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
export default Slide56;